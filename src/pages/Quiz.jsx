import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1>Quiz Page</h1>
      <p>Score: {score}</p>

      <button
        onClick={() => setScore(score + 1)}
        className="border p-2 mt-4"
      >
        Correct Answer
      </button>

      <button
        onClick={() => navigate("/result")}
        className="bg-black text-white p-2 mt-4 block"
      >
        Finish Quiz
      </button>
    </div>
  );
}
