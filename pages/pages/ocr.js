import { useState } from "react";

export default function OCR() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please upload an image first!");

    setLoading(true);
    const formData = new FormData();
    formData.append("data", file);

    try {
      const res = await fetch("https://Tigerabhay-Ingrective5.hf.space/run/predict", {
        method: "POST",
        body: formData
      });

      const result = await res.json();
      const extracted = result.data[0];

      // highlight harmful ingredients
      const harmful = ["Maltodextrin", "MSG", "Sodium Benzoate", "Potassium Bromate"];
      let highlighted = extracted;
      harmful.forEach(word => {
        const regex = new RegExp(word, "gi");
        highlighted = highlighted.replace(regex, `<mark style="background:yellow">${word}</mark>`);
      });

      setText(highlighted);
    } catch (err) {
      setText("❌ Error processing image. Try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>Upload Food Label for OCR</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>Analyze</button>

      {loading && <p>Processing...</p>}

      <div
        style={{ marginTop: "20px", textAlign: "left", padding: "15px", border: "1px solid #ccc" }}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </div>
  );
}
