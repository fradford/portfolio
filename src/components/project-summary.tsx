import Image from "next/image";
import NavLink from "./nav-link";
import Divider from "./divider";

export default function ProjectSummary({
  title,
  description,
  imageSrc,
  techStack = [],
  className,
}: {
  title: string;
  description: string;
  imageSrc: string;
  techStack?: string[];
  className?: string;
}) {
  return (
    <div
      className={`w-full flex flex-col gap-4 p-4 rounded-md shadow-md bg-paper-200 dark:bg-ink-800 ${className}`}
    >
      <span className="h-1 bg-ink-900 dark:bg-paper-100" />
      <div className="flex flex-col gap-4 h-full">
        <Image
          src={imageSrc}
          alt={`${title} image`}
          width={256}
          height={256}
          className="w-full aspect-3/2 object-cover"
        />
        <NavLink
          href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="font-mono font-bold"
        >
          {title}
        </NavLink>

        <p className="font-serif text-justify flex-1">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-paper-300 dark:bg-ink-700 text-sm font-mono text-ink-900 dark:text-paper-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
