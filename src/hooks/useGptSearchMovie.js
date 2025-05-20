// hooks/useGptSearchMovies.js
import { GoogleGenAI } from "@google/genai";

const useGptSearchMovies = () => {
  console.log(import.meta.env.VITE_GEMINI_API_KEY || "not loaded", "apikey");
  const genAI = new GoogleGenAI("AIzaSyCysMjCzlr_zHA2MTFEtrZ13mHaUZcGRlc");

  const searchMovies = async (prompt) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return response;
  };

  return searchMovies;
};

export default useGptSearchMovies;
