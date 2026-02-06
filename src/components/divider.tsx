export default function Divider({ tight = false }: { tight?: boolean }) {
  const spacing = tight ? "h-8" : "h-12";
  const fontSize = tight ? "text-heading-4" : "text-heading-3";

  return (
    <div
      className={`@container w-full ${spacing} flex flex-row items-center before:bg-border before:dark:bg-border-dark after:bg-border after:dark:bg-border-dark before:grow after:grow before:h-px after:h-px`}
    >
      <div
        className={`inline-block mx-4 @md:mx-12 font-symbol content-center ${fontSize} select-none`}
      >
        🙣 ✦ 🙡
      </div>
    </div>
  );
}
