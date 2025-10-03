export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "3rem", color: "#0070f3" }}>Welcome to Ingrective</h1>
      <p style={{ fontSize: "1.2rem" }}>Your AI-powered Food Label Analyzer 🚀</p>

      <nav style={{ marginTop: "20px" }}>
        <a href="/ocr" style={{ margin: "0 15px" }}>OCR</a>
        <a href="/chemicals" style={{ margin: "0 15px" }}>Chemicals</a>
        <a href="/about" style={{ margin: "0 15px" }}>About</a>
      </nav>
    </div>
  );
}
