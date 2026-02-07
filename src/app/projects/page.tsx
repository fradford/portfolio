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
          description="Gesturely is a smart home automation system that uses machine learning to detect and recognize user gestures, allowing for intuitive control of smart devices."
          imageSrc="/gesturely.svg"
          techStack={["Python", "Machine Learning", "IoT"]}
        />
        <ProjectSummary
          title="Sage"
          description="Sage is a python application that converts image files into music."
          imageSrc="/logo.svg"
          techStack={["Python"]}
        />
        <ProjectSummary
          title="Age of Mail"
          description="Age of Mail is a Caribbean mail delivery simulator set during the “Age of Sail”. Age of Mail was created in 48 hours for the Ludum Dare 53 game jam."
          imageSrc="/age-of-mail.png"
          techStack={["Godot", "GDScript", "Game Development"]}
        />
        <ProjectSummary
          title="SPEKS: A Murder Mystery"
          description="SPEKS is an interactive murder mystery game that sees players take the role of a robot investigator aboard a shuttle bound for Mars, tasked with solving the murder of the ship's captain. SPEKS was created in 48 hours for the Ludum Dare 48 game jam."
          imageSrc="/speks.png"
          techStack={["Godot", "GDScript", "Game Development"]}
        />
      </div>
    </>
  );
}
