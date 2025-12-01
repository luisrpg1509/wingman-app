import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export function Home() {
  const cardStyle: React.CSSProperties = {
    transition: "transform 0.12s ease-out, box-shadow 0.12s ease-out",
    width: "100%",
    padding: 14,
    borderRadius: 14,
    border: "1px solid rgba(148,163,184,0.25)",
    background:
      "linear-gradient(135deg, rgba(30,64,175,0.35), rgba(15,23,42,0.95))",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  };

  const iconBubbleStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(15,23,42,0.9)",
    fontSize: 20,
  };

  const cardTextTitle: React.CSSProperties = {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 4,
  };

  const cardTextSubtitle: React.CSSProperties = {
    fontSize: 12,
    color: "#9ca3af",
  };

  return (
    <Layout>
      {/* HERO */}
      <section style={{ marginBottom: 20 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 10px",
            borderRadius: 999,
            border: "1px solid rgba(148,163,184,0.35)",
            backgroundColor: "rgba(15,23,42,0.9)",
            marginBottom: 10,
            fontSize: 11,
            color: "#e5e7eb",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              width: 6,
              height: 6,
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #4ade80, #16a34a)",
            }}
          />
          <span>MVP · Just between you and your crush</span>
        </div>

        <h2
          style={{
            fontSize: 24,
            margin: 0,
            marginBottom: 6,
          }}
        >
          What do you need help with today?
        </h2>
        <p
          style={{
            margin: 0,
            marginTop: 4,
            color: "#9ca3af",
            fontSize: 13,
            lineHeight: 1.4,
          }}
        >
          Pick a mode and Wingman will give you texts, questions or mini games
          you can use right away in chat or in person.
        </p>
      </section>

      {/* MAIN CARDS */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 22,
        }}
      >
        {/* Reply */}
        <Link to="/reply" style={{ textDecoration: "none", color: "inherit" }}>
          <button style={cardStyle}>
            <div style={iconBubbleStyle}>💬</div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={cardTextTitle}>Reply to a message</div>
              <div style={cardTextSubtitle}>
                Stuck on what to say? Get playful, cute or bold replies you can
                copy in one tap.
              </div>
            </div>
          </button>
        </Link>

        {/* Questions */}
        <Link
          to="/questions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button
            style={{
              ...cardStyle,
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.35), rgba(15,23,42,0.95))",
            }}
          >
            <div style={iconBubbleStyle}>🎯</div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={cardTextTitle}>Questions that flow</div>
              <div style={cardTextSubtitle}>
                Light, flirty or deep questions to keep the conversation
                flowing, not dry.
              </div>
            </div>
          </button>
        </Link>

        {/* Mini games */}
        <Link to="/games" style={{ textDecoration: "none", color: "inherit" }}>
          <button
            style={{
              ...cardStyle,
              background:
                "linear-gradient(135deg, rgba(52,211,153,0.25), rgba(15,23,42,0.95))",
            }}
          >
            <div style={iconBubbleStyle}>🎲</div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={cardTextTitle}>Mini games</div>
              <div style={cardTextSubtitle}>
                Fun prompts and games for dates, calls or late-night chats
                without awkwardness.
              </div>
            </div>
          </button>
        </Link>

        {/* Turn into a date */}
        <Link to="/date" style={{ textDecoration: "none", color: "inherit" }}>
          <button
            style={{
              ...cardStyle,
              background:
                "linear-gradient(135deg, rgba(248,113,113,0.3), rgba(15,23,42,0.95))",
            }}
          >
            <div style={iconBubbleStyle}>📅</div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={cardTextTitle}>Turn it into a date</div>
              <div style={cardTextSubtitle}>
                When the vibe is good and you want to suggest meeting up without
                being weird.
              </div>
            </div>
          </button>
        </Link>
      </section>

      {/* FOOTER HINT / TIP */}
      <section
        style={{
          padding: 12,
          borderRadius: 12,
          border: "1px dashed rgba(148,163,184,0.4)",
          backgroundColor: "rgba(15,23,42,0.85)",
          fontSize: 11,
          color: "#9ca3af",
        }}
      >
        <div style={{ marginBottom: 4, fontWeight: 500, color: "#e5e7eb" }}>
          Tip
        </div>
        <div>
          Tap any line to copy it. Adapt it to your style, don’t just paste
          blindly. Wingman is here to help you sound like *you*, not a robot.
        </div>
      </section>
    </Layout>
  );
}

