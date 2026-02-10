import NavLink from "./nav-link";
import Tag from "./tag";

export default function BlogSummary({
  id,
  title,
  date,
  blurb,
  tags,
  className,
}: {
  id: number;
  title: string;
  date: Date;
  blurb: string;
  tags?: string[];
  className?: string;
}) {
  return (
    <div className={`w-full flex flex-row gap-4 ${className}`}>
      <span className="w-1 bg-ink-900 dark:bg-paper-100" />
      <div className="flex flex-col">
        <NavLink href={`/blog/${id}`} className="font-mono">
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

        <div className="flex flex-row flex-wrap gap-2 mt-2">
          {tags?.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
