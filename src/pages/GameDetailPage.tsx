import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { miniGames } from "../data/games";

export function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const game = useMemo(
    () => miniGames.find((g) => g.id === Number(id)),
    [id]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!game) {
    return (
      <Layout>
        <p style={{ fontSize: 14, color: "#e5e7eb" }}>
          Game not found.
          <button
            style={{
              marginLeft: 8,
              padding: "4px 8px",
              borderRadius: 6,
              border: "1px solid #4b5563",
              backgroundColor: "#020617",
              color: "#e5e7eb",
              cursor: "pointer",
              fontSize: 12,
            }}
            onClick={() => navigate("/games")}
          >
            Back to games
          </button>
        </p>
      </Layout>
    );
  }

  const prompts = game.prompts ?? [];

  const handleNext = () => {
    if (!prompts.length) return;
    setCurrentIndex((prev) => (prev + 1) % prompts.length);
  };

  const handleRandom = () => {
    if (!prompts.length) return;
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setCurrentIndex(randomIndex);
  };

  const handleCopy = () => {
    if (!prompts.length) return;
    const text = prompts[currentIndex];
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard ✅");
  };

  return (
    <Layout>
      <button
        onClick={() => navigate("/games")}
        style={{
          fontSize: 12,
          marginBottom: 10,
          padding: "4px 8px",
          borderRadius: 999,
          border: "1px solid #4b5563",
          backgroundColor: "#020617",
          color: "#e5e7eb",
          cursor: "pointer",
        }}
      >
        ← Back to games
      </button>

      <h2 style={{ fontSize: 20, marginBottom: 6 }}>{game.title}</h2>
      <p
        style={{
          marginTop: 0,
          marginBottom: 10,
          color: "#9ca3af",
          fontSize: 13,
        }}
      >
        {game.description}
      </p>

      {prompts.length > 0 ? (
        <>
          <div
            style={{
              marginTop: 12,
              marginBottom: 12,
              padding: 14,
              borderRadius: 12,
              border: "1px solid #1f2937",
              backgroundColor: "#020617",
              minHeight: 80,
              display: "flex",
              alignItems: "center",
              fontSize: 14,
            }}
          >
            {prompts[currentIndex]}
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 16,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handleNext}
              style={{
                padding: "8px 12px",
                borderRadius: 999,
                border: "none",
                backgroundColor: "#4f46e5",
                color: "#e5e7eb",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Next
            </button>
            <button
              onClick={handleRandom}
              style={{
                padding: "8px 12px",
                borderRadius: 999,
                border: "none",
                backgroundColor: "#1f2937",
                color: "#e5e7eb",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Random
            </button>
            <button
              onClick={handleCopy}
              style={{
                padding: "8px 12px",
                borderRadius: 999,
                border: "none",
                backgroundColor: "#0f766e",
                color: "#e5e7eb",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Copy
            </button>
          </div>

          <p
            style={{
              fontSize: 11,
              color: "#9ca3af",
              lineHeight: 1.4,
            }}
          >
            How to use it: read the prompt out loud or send it in chat. Take turns
            answering. Use “Next” or “Random” to keep the game moving.
          </p>
        </>
      ) : (
        <p style={{ fontSize: 13, color: "#9ca3af" }}>
          This game doesn’t have prompts yet. Use the description as a guide to
          play it.
        </p>
      )}
    </Layout>
  );
}
