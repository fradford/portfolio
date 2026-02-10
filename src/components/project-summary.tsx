import Image from "next/image";
import Tag from "./tag";

export default function ProjectSummary({
  title,
  description = null,
  imageSrc = "/placeholder.jpg",
  techStack = [],
  links = [],
  className,
}: {
  title: string;
  description: string | null;
  imageSrc?: string;
  techStack?: string[];
  links?: { href: string; friendlyName: string | null }[];
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col h-full justify-start">
        <Image
          src={imageSrc}
          alt={`${title} image`}
          width={300}
          height={200}
          className="w-full aspect-3/2 object-cover rounded-sm"
        />
        <h3 className="font-mono font-bold mt-2">{title}</h3>

        <span className="h-0.5 bg-ink-900 dark:bg-paper-100" />

        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <Tag key={tech} text={tech} />
          ))}
        </div>

        {description && (
          <p className="font-serif text-justify mt-2">{description}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="underline text-body">
              {link.friendlyName || link.href}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
