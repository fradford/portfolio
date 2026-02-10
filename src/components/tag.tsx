export default function Tag({ text }: { text: string }) {
  return (
    <span className="px-2 py-0.5 rounded-sm bg-paper-300 dark:bg-ink-700 text-sm font-mono text-ink-900 dark:text-paper-100">
      {text}
    </span>
  );
}
