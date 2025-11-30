import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        background: "#0f172a",
        color: "#f9fafb",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 480, padding: "16px 20px 40px" }}>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 28, margin: 0 }}>Wingman 🪽</h1>
          <p style={{ margin: "4px 0 0", color: "#9ca3af", fontSize: 14 }}>
            Your pocket flirting co-pilot.
          </p>
          <nav
            style={{
              marginTop: 12,
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              fontSize: 13,
            }}
          >
            <Link to="/" style={{ color: "#a5b4fc", textDecoration: "none" }}>
              Home
            </Link>
            <Link
              to="/reply"
              style={{ color: "#a5b4fc", textDecoration: "none" }}
            >
              Reply
            </Link>
            <Link
              to="/questions"
              style={{ color: "#a5b4fc", textDecoration: "none" }}
            >
              Questions
            </Link>
            <Link
              to="/games"
              style={{ color: "#a5b4fc", textDecoration: "none" }}
            >
              Games
            </Link>
            <Link
              to="/date"
              style={{ color: "#a5b4fc", textDecoration: "none" }}
            >
              Ask for a date
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
