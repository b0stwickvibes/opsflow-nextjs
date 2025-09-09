import { NextRequest } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'

export const runtime = 'nodejs'

async function callProvider(messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>) {
  const provider = process.env.AI_PROVIDER || 'none'

  if (provider === 'openai' && process.env.OPENAI_API_KEY) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        temperature: 0.3,
      }),
    })
    if (!res.ok) throw new Error('Provider error')
    const data = await res.json()
    return data.choices?.[0]?.message?.content || ''
  }

  if (provider === 'anthropic' && process.env.ANTHROPIC_API_KEY) {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-latest',
        max_tokens: 1024,
        messages: messages.map(m => ({ role: m.role, content: m.content })),
      }),
    })
    if (!res.ok) throw new Error('Provider error')
    const data = await res.json()
    const content = data?.content?.[0]?.text ?? ''
    return content
  }

  // Fallback if not configured
  return "AI is not yet configured in this environment. Add your provider API key to enable responses."
}

export async function POST(req: NextRequest) {
  // Optional auth gate via Clerk (comment out to make public)
  try {
    const user = await currentUser()
    // If you want public docs chat, comment this out.
    // if (!user) return new Response('Unauthorized', { status: 401 })
  } catch {
    // Clerk not available; allow guest usage in docs.
  }

  const body = (await req.json()) as {
    messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
    context?: { docTitle?: string; docSlug?: string; url?: string; selection?: string }
  }
  const { messages, context } = body
  if (!Array.isArray(messages)) {
    return new Response('Invalid payload', { status: 400 })
  }

  const contextSummary = context
    ? `Documentation context:\n- Title: ${context.docTitle ?? 'unknown'}\n- Slug: ${context.docSlug ?? 'unknown'}\n- URL: ${context.url ?? 'unknown'}\n${context.selection ? `- User selection: "${context.selection}"` : ''}`
    : undefined

  const providerMessages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
    { role: 'system', content: 'You are an expert OpsFlow documentation assistant. Be concise, cite relevant sections if possible.' },
  ]

  if (contextSummary) {
    providerMessages.push({ role: 'system', content: contextSummary })
  }

  providerMessages.push(...messages)

  const content = await callProvider(providerMessages)

  return new Response(JSON.stringify({ content }), {
    headers: { 'Content-Type': 'application/json' },
  })
}

