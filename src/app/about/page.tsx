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
            Hi, I'm Francis. I build software that solves real problems like
            handling sensor data streaming at thousands of samples per second,
            helping to easily analyze satellite imagery for green energy
            projects, or replacing unstable legacy systems with modern,
            maintainable code.
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
          My path into software started in high school, when I took a tech class
          which introduced woodshop, automotive mechanics, and programming. I
          took a detour through electrical engineering, which gave me a
          fundamental understanding of how our digital world works, but I found
          myself drawn back to code. I have since completed a degree in software
          engineering, which gave me not only a strong foundation in data
          structures, algorithms, and software design principles, but also over
          a year of hands-on industry experience through paid co-op roles.
        </p>
        <p className="font-serif text-justify">
          Outside of work, I enjoy hiking, photography, cooking, and tinkering
          with electronics. Lately I've been fighting with my 3D printer,
          building mechanical keyboards, and learning bookbinding.
        </p>
      </div>
    </>
  );
}
