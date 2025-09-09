# AI Chatbot in Next.js 15 (App Router)

Build a first-class, in-product AI assistant instead of pushing users to external tools. This guide shows a production-ready, provider-agnostic approach that works with OpenAI, Anthropic, Together, or your preferred API.

Benefits of in-app chat vs external tools
- Own the UX: brand, telemetry, permissions, and context
- Leverage your auth/session (Clerk) and user/org metadata
- Integrate product context (docs, plans, feature flags, analytics)
- Stream responses for fast perceived performance
- Keep secrets server-side and enforce rate limits

Prereqs
- Next.js 15 with App Router (this repo)
- Clerk configured (this repo)
- Node 18+ (Edge optional)
- One provider key (e.g., OPENAI_API_KEY) stored in .env.local

Environment variables (.env.local)
- OPENAI_API_KEY=... or ANTHROPIC_API_KEY=...
- AI_PROVIDER=openai | anthropic | together (choose one)

Minimal architecture options
1) Route Handler (Node runtime, simple, flexible)
2) Edge Route (Edge runtime, very low latency, best for streaming text)
3) Server Action (simple but less portable for cross-clients)

This guide uses a Route Handler with streaming; swap the provider call based on AI_PROVIDER.

Server: Route handler with optional streaming
Create app/api/chat/route.ts.

```ts
import { NextRequest } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'

export const runtime = 'nodejs' // change to 'edge' if preferred

// Simple provider-agnostic call wrapper
async function callProvider(messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>) {
  const provider = process.env.AI_PROVIDER || 'openai'

  if (provider === 'openai') {
    // Example using OpenAI REST; install `openai` SDK if you prefer.
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

  if (provider === 'anthropic') {
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

  // Add other providers here
  throw new Error('Unsupported provider')
}

export async function POST(req: NextRequest) {
  // Clerk gate by default (adjust to your needs)
  const user = await currentUser()
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  // Basic per-user rate limit (example only; use a real store like Upstash Redis)
  // You can also use a middleware to centralize rate limits.

  const { messages } = (await req.json()) as { messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> }
  if (!Array.isArray(messages)) {
    return new Response('Invalid payload', { status: 400 })
  }

  try {
    const content = await callProvider([
      { role: 'system', content: 'You are an expert restaurant-ops assistant. Be concise and practical.' },
      ...messages,
    ])

    return new Response(JSON.stringify({ content }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('[chat] error', err)
    return new Response('Server error', { status: 500 })
  }
}
```

Client: Simple chat widget with streaming-like UX
Create a client component, e.g., components/shared/ai/ChatWidget.tsx.

```tsx
'use client'
import { useState } from 'react'

interface Message { role: 'user' | 'assistant'; content: string }

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    if (!input.trim() || loading) return
    const next = [...messages, { role: 'user', content: input }]
    setMessages(next)
    setInput('')
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: next }),
    })
    if (!res.ok) {
      setLoading(false)
      return
    }
    const data = await res.json()
    setMessages([...next, { role: 'assistant', content: data.content }])
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-3 border rounded-md p-3 max-w-lg">
      <div className="min-h-[160px] text-sm space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <span className={m.role === 'user' ? 'bg-primary text-white px-2 py-1 rounded' : 'bg-muted px-2 py-1 rounded'}>
              {m.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-muted-foreground">Thinking…</div>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          placeholder="Ask about features, pricing, setup…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') send() }}
        />
        <button onClick={send} className="border rounded px-3">Send</button>
      </div>
    </div>
  )
}
```

Usage in a page or section
```tsx
import dynamic from 'next/dynamic'
const ChatWidget = dynamic(() => import('@/components/shared/ai/ChatWidget'))

export default function SupportSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold mb-3">Ask OpsFlow AI</h2>
        <p className="text-muted-foreground mb-6">Product setup, integration details, or best practices.</p>
        <ChatWidget />
      </div>
    </section>
  )
}
```

Edge streaming (optional)
- For best streaming UX, switch runtime to 'edge' and stream the response body with a ReadableStream.
- Or adopt the Vercel AI SDK (ai) which simplifies streaming across providers.

Clerk integration
- Use currentUser in the route to gate access.
- Include orgId, role, and plan to enforce quotas and feature access.

Rate limiting
- Start with per-user in-memory (development only), switch to Redis (e.g., Upstash) for production.
- Consider per-route limits and soft-fail behaviors.

RAG (optional)
- Index your docs (this repo’s docs/ and domain content) with a vector DB (e.g., Postgres pgvector, Pinecone, Weaviate).
- Retrieve top-k chunks by query, stuff into the system or user prompt.

Security and secrets
- Never expose API keys to the client.
- Keep provider selection and keys only on the server.
- Add input validation and output moderation if needed.

Testing & observability
- Log token usage, latency, and user/org identifiers (without PII).
- Add unit tests for prompt builders and safety checks.

Deployment tips
- Use Edge for low-latency chat where possible.
- Ensure env vars exist in your hosting environment.
- Monitor rate-limit errors and model changes.

