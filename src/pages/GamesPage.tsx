import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { miniGames } from "../data/games";

type SituationFilter = "all" | "first_date" | "chatting" | "call" | "long_distance";

const situationLabels: Record<SituationFilter, string> = {
  all: "Any situation",
  first_date: "First date",
  chatting: "Chatting",
  call: "Call / voice",
  long_distance: "Long-distance",
};

export function GamesPage() {
  const [situation, setSituation] = useState<SituationFilter>("all");

  const filteredGames = miniGames.filter((game) => {
    if (situation === "all") return true;
    return game.suggestedSituations.includes(situation as any);
  });

  return (
    <Layout>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>Mini games 🎲</h2>
      <p style={{ marginBottom: 12, color: "#9ca3af", fontSize: 14 }}>
        Tap a game to open it and use the prompts directly in your chat or in person.
      </p>

      <label style={{ display: "block", marginBottom: 12, fontSize: 14 }}>
        Situation:
        <select
          value={situation}
          onChange={(e) => setSituation(e.target.value as SituationFilter)}
          style={{
            marginLeft: 8,
            padding: "4px 8px",
            borderRadius: 6,
            border: "1px solid #4b5563",
            backgroundColor: "#020617",
            color: "#e5e7eb",
          }}
        >
          <option value="all">{situationLabels.all}</option>
          <option value="first_date">{situationLabels.first_date}</option>
          <option value="chatting">{situationLabels.chatting}</option>
          <option value="call">{situationLabels.call}</option>
          <option value="long_distance">
            {situationLabels.long_distance}
          </option>
        </select>
      </label>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {filteredGames.map((game) => (
          <Link
            key={game.id}
            to={`/games/${game.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                padding: 12,
                borderRadius: 10,
                border: "1px solid #1f2937",
                backgroundColor: "#020617",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: 4,
                  color: "#e5e7eb",
                }}
              >
                {game.title}
              </div>
              <div
                style={{
                  color: "#d1d5db",
                  marginBottom: 6,
                  fontSize: 13,
                }}
              >
                {game.description}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#9ca3af",
                }}
              >
                Tap to play →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
