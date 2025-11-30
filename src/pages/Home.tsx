import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export function Home() {
  return (
    <Layout>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>
        What do you need help with?
      </h2>
      <p style={{ marginBottom: 20, color: "#9ca3af", fontSize: 14 }}>
        Choose a mode and get lines, questions, and prompts you can use right away.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Link to="/reply">
    <button
      style={{
        width: "100%",
        padding: 12,
        borderRadius: 10,
        border: "none",
        fontSize: 15,
        cursor: "pointer",
      }}
    >
      Reply to a message 💬
    </button>
  </Link>
  <Link to="/questions">
    <button
      style={{
        width: "100%",
        padding: 12,
        borderRadius: 10,
        border: "none",
        fontSize: 15,
        cursor: "pointer",
      }}
    >
      Questions 🎯
    </button>
  </Link>
  <Link to="/games">
    <button
      style={{
        width: "100%",
        padding: 12,
        borderRadius: 10,
        border: "none",
        fontSize: 15,
        cursor: "pointer",
      }}
    >
      Mini games 🎲
    </button>
  </Link>
  <Link to="/date">
    <button
      style={{
        width: "100%",
        padding: 12,
        borderRadius: 10,
        border: "none",
        fontSize: 15,
        cursor: "pointer",
      }}
    >
      Turn it into a date 📅
    </button>
  </Link>
      </div>
    </Layout>
  );
}
