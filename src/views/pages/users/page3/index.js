import React, { useState } from "react";
import Tesseract from "tesseract.js";

function App() {
  const [ocrResult, setOcrResult] = useState("");

  const handleOcr = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const { data } = await Tesseract.recognize(file, "eng");
      setOcrResult(data.text);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleOcr} />
      <p>{ocrResult}</p>
    </div>
  );
}

export default App;
