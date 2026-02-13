import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Start Quiz</h1>

      <button
        onClick={() => navigate("/quiz")}
        className="bg-black text-white p-3"
      >
        Start Quiz
      </button>
    </div>
  );
}
