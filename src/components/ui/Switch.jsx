export default function Switch({ checked, onCheckedChange }) {
  return (
    <button
      type="button"
      onClick={() => onCheckedChange(!checked)}
      className={`relative h-7 w-12 rounded-full transition ${checked ? "bg-emerald-600" : "bg-stone-400"}`}
    >
      <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${checked ? "left-6" : "left-1"}`} />
    </button>
  );
}