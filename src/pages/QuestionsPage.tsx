import { useState } from "react";
import { Layout } from "../components/Layout";
import { questions } from "../data/questions";
import type { QuestionType } from "../data/questions";

export function QuestionsPage() {
  const [type, setType] = useState<QuestionType | "all">("all");

  const filtered = questions.filter((q) => {
    if (type !== "all" && q.type !== type) return false;
    return true;
  });

  return (
    <Layout>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>Questions & games</h2>
      <p style={{ marginBottom: 12, color: "#9ca3af", fontSize: 14 }}>
        Use these to keep the conversation flowing on chat or in person.
      </p>

      <label style={{ display: "block", marginBottom: 12, fontSize: 14 }}>
        Question type:
        <select
          value={type}
          onChange={(e) => setType(e.target.value as QuestionType | "all")}
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
          <option value="light">Light</option>
          <option value="flirty">Flirty</option>
          <option value="deep">Deep</option>
        </select>
      </label>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map((q) => (
          <div
            key={q.id}
            style={{
              padding: 12,
              borderRadius: 10,
              border: "1px solid #1f2937",
              backgroundColor: "#020617",
              fontSize: 14,
            }}
          >
            {q.text}
          </div>
        ))}
      </div>
    </Layout>
  );
}
