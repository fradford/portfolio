import Divider from "@/src/components/divider";
import ProjectSummary from "@/src/components/project-summary";

export default function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        <h1 className="font-title">Projects</h1>
        <h3 className="font-serif">Explore some of my past work</h3>
      </div>

      <Divider />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <ProjectSummary
          title="Gesturely"
          description="Gesturely is a smart home automation system that uses machine learning to detect and recognize user gestures, allowing for intuitive control of smart devices. It was built using Python."
          imageSrc="/francis-radford.jpg"
          techStack={["Python", "Machine Learning", "IoT"]}
        />
        <ProjectSummary
          title="Project 2"
          description="This is a description of my second project. It was a mobile app built with Flutter that helped users manage their finances and budget effectively."
          imageSrc="/logo.svg"
          techStack={["Flutter", "Dart", "Firebase"]}
        />
        <ProjectSummary
          title="Project 3"
          description="This is a description of my third project. It was a desktop application built with Electron that provided a platform for users to organize their tasks and increase productivity."
          imageSrc="/logo.svg"
          techStack={["Electron", "JavaScript", "Node.js"]}
        />
        <ProjectSummary
          title="Project 4"
          description="This is a description of my fourth project. It was a web application built with React that allowed users to create and share their own recipes, fostering a community of food enthusiasts."
          imageSrc="/logo.svg"
          techStack={["React", "TypeScript", "GraphQL"]}
        />
      </div>
    </>
  );
}
