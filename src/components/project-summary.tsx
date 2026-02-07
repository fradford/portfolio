import Image from "next/image";

export default function ProjectSummary({
  title,
  description,
  imageSrc = "/placeholder.jpg",
  techStack = [],
  className,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  techStack?: string[];
  className?: string;
}) {
  return (
    <a
      href={`/projects/${title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-")}`}
      className={`w-full block hover:translate-y-0.5 transition-transform duration-200 ${className}`}
    >
      <div className="flex flex-col h-full">
        <Image
          src={imageSrc}
          alt={`${title} image`}
          width={300}
          height={200}
          className="w-full aspect-3/2 object-cover rounded-sm"
        />
        <h3 className="font-mono font-bold mt-2">{title}</h3>
        <span className="h-0.5 bg-ink-900 dark:bg-paper-100" />

        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-paper-300 dark:bg-ink-700 text-sm font-mono text-ink-900 dark:text-paper-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="font-serif text-justify flex-1 mt-4">{description}</p>
      </div>
    </a>
  );
}
