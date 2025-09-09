"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input };
    const next: Message[] = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Request failed");
      }

      const data = (await res.json()) as { content: string };
      const assistantMsg: Message = { role: "assistant", content: data.content };
      setMessages([...next, assistantMsg]);
    } catch (e) {
      setError(
        "AI is unavailable right now. If you’re setting this up, add your provider API key."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-xl border bg-background shadow-xl">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="text-sm font-medium">Ask OpsFlow AI</div>
        <div className="flex items-center gap-2">
          <a
            href="/docs/AI-CHATBOT-NEXTJS"
            className="text-xs text-muted-foreground hover:text-primary"
          >
            How it’s built
          </a>
          <button
            aria-label="Close"
            className="text-muted-foreground hover:text-foreground"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>
      <div className="max-h-[50vh] min-h-[220px] overflow-y-auto p-3 text-sm">
        {messages.length === 0 && (
          <div className="text-muted-foreground">
            Ask about features, setup, pricing, or integrations.
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <span
              className={
                m.role === "user"
                  ? "inline-block max-w-[85%] rounded bg-primary px-2 py-1 text-white"
                  : "inline-block max-w-[85%] rounded bg-muted px-2 py-1"
              }
            >
              {m.content}
            </span>
          </div>
        ))}
        {loading && <div className="mt-2 text-muted-foreground">Thinking…</div>}
        {error && <div className="mt-2 text-destructive">{error}</div>}
      </div>
      <div className="flex gap-2 border-t p-2">
        <Input
          placeholder="Type your question…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
        />
        <Button onClick={send} disabled={loading}>
          Send
        </Button>
      </div>
    </div>
  );
}

