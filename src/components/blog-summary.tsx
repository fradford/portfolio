import NavLink from "./nav-link";

export default function BlogSummary({
  title,
  date,
  blurb,
  className,
}: {
  title: string;
  date: Date;
  blurb: string;
  className?: string;
}) {
  return (
    <div className={`w-full flex flex-row gap-4 ${className}`}>
      <span className="w-1 bg-ink-900 dark:bg-paper-100" />
      <div className="flex flex-col">
        <NavLink href={`/blogs/${title.toLowerCase().replace(/\s+/g, "-")}`}>
          {title}
        </NavLink>
        <span className="text-sm text-ink-900 dark:text-paper-100">
          {date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <p className="font-serif text-justify mt-2">{blurb}</p>
      </div>
    </div>
  );
}
