import Divider from "@/src/components/divider";
import ProjectSummary from "@/src/components/project-summary";
import prisma from "@/lib/prisma";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      tags: true,
      links: true,
    },
  });

  return (
    <>
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        <h1 className="font-title">Projects</h1>
        <h3 className="font-serif">Explore some of my past work</h3>
      </div>

      <Divider />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {projects.map((project) => (
          <ProjectSummary
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageUrl || undefined}
            techStack={project.tags.map((tag) => tag.text)}
            links={project.links.map((link) => ({
              href: link.href,
              friendlyName: link.friendlyName,
            }))}
          />
        ))}
      </div>
    </>
  );
}
