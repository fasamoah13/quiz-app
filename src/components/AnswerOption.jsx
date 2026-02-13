export default function AnswerOption({ text, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="w-full p-3 border rounded mb-2"
    >
      {text}
    </button>
  );
}
