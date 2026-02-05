import Image from "next/image";
import NavLink from "./nav-link";

export default function ProjectBlock({
  projectName,
  projectBlurb,
  reversed,
  projectImage,
  className,
}: {
  projectName: string;
  projectBlurb: string;
  reversed?: boolean;
  projectImage?: string;
  className?: string;
}) {
  return (
    <div className={`w-full flex flex-row gap-4 ${className}`}>
      <span className="w-1 bg-ink-900" />
      <div className="flex flex-col gap-4">
        <NavLink
          href={`/projects/${projectName.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {projectName}
        </NavLink>
        <p className="font-serif text-justify">{projectBlurb}</p>
      </div>
    </div>
  );
}
