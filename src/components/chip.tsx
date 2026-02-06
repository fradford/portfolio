export default function Chip({ text }: { text: string }) {
  return (
    <div className="px-3 py-1 rounded-md bg-paper-200 dark:bg-ink-800 font-sans font-semibold hover:bg-ink-300 dark:hover:bg-ink-600 hover:scale-105 hover:-translate-y-0.5 transition-all duration-250 select-none">
      {text}
    </div>
  );
}
