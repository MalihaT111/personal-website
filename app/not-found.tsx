import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="botanical-bg" aria-hidden="true" />
      
      <div className="not-found-container">
        <div className="not-found-card">
          <div className="microtext" style={{ color: "var(--tert)", marginBottom: "var(--space-3)" }}>
            [ ERROR 404 ]
          </div>
          
          <h1 style={{ 
            fontFamily: "var(--font-serif)", 
            fontSize: "var(--text-display)", 
            color: "var(--dark)",
            margin: 0,
            marginBottom: "var(--space-4)"
          }}>
            Page Not Found
          </h1>
          
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-body-lg)",
            color: "var(--text)",
            lineHeight: 1.6,
            marginBottom: "var(--space-6)"
          }}>
            this page doesn't exist yet — or maybe it's still being built. 
            either way, you've wandered into uncharted territory.
          </p>
          
          <Link href="/" className="btn btn-primary">
            ← back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
