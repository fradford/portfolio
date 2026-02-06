import Divider from "@/src/components/divider";
import SkillBlock from "@/src/components/skill-block";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center justify-items-center gap-x-8 gap-y-4">
        <Image
          src="/francis-radford.jpg"
          alt="Francis Radford"
          width={512}
          height={512}
          className="aspect-square object-cover rounded-full shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-title">About</h1>
          <p className="font-serif text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            recusandae numquam dolores, minima vel maxime temporibus architecto
            aliquam illo cumque tenetur nostrum non, eos quis quibusdam
            similique. Provident, recusandae repellendus!
          </p>
        </div>
      </div>

      <Divider />

      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <h2 className="font-title">Skills</h2>

        <SkillBlock
          skills={[
            "Python",
            "JavaScript",
            "TypeScript",
            "Java",
            "C#",
            "C",
            "SQL",
            "HTML",
            "CSS",
            "React",
            "Next.js",
            "Node.js",
            "JavaFX",
            "ASP.NET",
            "Restful APIs",
            "MySQL",
            "PostgreSQL",
            "AWS",
            "Docker",
            "CI/CD",
            "Git",
            "Agile Methodologies",
            "Team Collaboration",
            "Problem Solving",
            "UI/UX Design",
            "Effective Communication",
            "Time Management",
            "Organizational Skills",
            "Adaptability",
            "Critical Thinking",
            "Creativity",
            "Attention to Detail",
          ]}
        />
      </div>

      <Divider />

      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <h2 className="font-title">Looking for more?</h2>
        <p className="font-serif text-justify">
          Outside of work, I enjoy hiking, photography, cooking, and exploring
          new technologies. I also enjoy tinkering with electronics and fighting
          with my 3D printer. Lately I've been into mechanical keyboards and
          bookbinding. If you want to chat about any of that or just say hi,
          feel free to reach out!
        </p>
      </div>
    </>
  );
}
