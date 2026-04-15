export default function Button({ children, className = "", variant = "default", ...props }) {
  const styles =
    variant === "outline"
      ? "border border-emerald-600/30 bg-transparent text-current"
      : "bg-stone-900 text-white";

  return (
    <button className={`px-5 py-3 font-medium transition hover:opacity-90 ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}