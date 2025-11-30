import { useState } from "react";
import { Layout } from "../components/Layout";
import { replies } from "../data/replies";
import type { Tone } from "../data/replies";

export function ReplyPage() {
  const [tone, setTone] = useState<Tone | "all">("all");

  const filtered = replies.filter((r) => {
    if (r.category !== "reply") return false;
    if (tone !== "all" && r.tone !== tone) return false;
    return true;
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard ✅");
  };

  return (
    <Layout>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>Reply to a message</h2>
      <p style={{ marginBottom: 12, color: "#9ca3af", fontSize: 14 }}>
        Pick a tone and tap a line to copy it.
      </p>

      <label style={{ display: "block", marginBottom: 12, fontSize: 14 }}>
        Tone:
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value as Tone | "all")}
          style={{
            marginLeft: 8,
            padding: "4px 8px",
            borderRadius: 6,
            border: "1px solid #4b5563",
            backgroundColor: "#020617",
            color: "#e5e7eb",
          }}
        >
          <option value="all">Any</option>
          <option value="playful">Playful</option>
          <option value="cute">Cute</option>
          <option value="bold">Bold</option>
          <option value="sarcastic">Sarcastic</option>
        </select>
      </label>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map((reply) => (
          <button
            key={reply.id}
            onClick={() => handleCopy(reply.text)}
            style={{
              textAlign: "left",
              padding: 12,
              borderRadius: 10,
              border: "1px solid #1f2937",
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.2), rgba(15,23,42,0.9))",
              fontSize: 14,
              color: "#e5e7eb",
              cursor: "pointer",
            }}
          >
            {reply.text}
          </button>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: "#9ca3af", fontSize: 14 }}>No replies yet.</p>
        )}
      </div>
    </Layout>
  );
}
