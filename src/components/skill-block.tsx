import Chip from "./chip";

export default function SkillBlock({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 justify-start items-center">
      {skills.map((skill) => (
        <Chip key={skill} text={skill} />
      ))}
    </div>
  );
}
