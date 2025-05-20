// index.mjs or add "type": "module" in package.json
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/gemini", async (req, res) => {
  const { prompt } = req.body;
  console.log("Prompt received:", prompt);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const response = result.response;

    res.json({ result: response.text() });
  } catch (err) {
    console.error("Gemini API Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(8000, () => {
  console.log("✅ Server running on http://localhost:8000");
});
