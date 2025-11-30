import { Layout } from "../components/Layout";
import { replies } from "../data/replies";

export function DatePage() {
  const dateLines = replies.filter((r) => r.category === "ask_date");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard ✅");
  };

  return (
    <Layout>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>Turn it into a date</h2>
      <p style={{ marginBottom: 12, color: "#9ca3af", fontSize: 14 }}>
        Use these when you want to suggest meeting up without being weird.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {dateLines.map((line) => (
          <button
            key={line.id}
            onClick={() => handleCopy(line.text)}
            style={{
              textAlign: "left",
              padding: 12,
              borderRadius: 10,
              border: "1px solid #1f2937",
              background:
                "linear-gradient(135deg, rgba(248,113,113,0.2), rgba(15,23,42,0.9))",
              fontSize: 14,
              color: "#e5e7eb",
              cursor: "pointer",
            }}
          >
            {line.text}
          </button>
        ))}
        {dateLines.length === 0 && (
          <p style={{ color: "#9ca3af", fontSize: 14 }}>
            No date lines configured yet.
          </p>
        )}
      </div>
    </Layout>
  );
}
