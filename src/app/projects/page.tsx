import Divider from "@/src/components/divider";
import ProjectBlock from "@/src/components/project-block";

export default function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        <h1 className="font-title">Projects</h1>
        <h3 className="font-serif">My best work goes here</h3>
      </div>

      <Divider />

      <div className="w-full flex flex-col gap-12">
        <ProjectBlock
          projectName="Project One"
          projectBlurb="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim maxime laborum, dolores alias quibusdam dolorem sapiente nulla explicabo excepturi magni culpa magnam veritatis eaque doloremque accusantium iusto eos, perferendis atque!"
        />

        <ProjectBlock
          projectName="Project Two"
          projectBlurb="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam blanditiis quisquam molestiae, ea autem quos sed dignissimos fugit culpa recusandae? Consectetur alias, assumenda qui eius porro at accusamus dolores sint?"
        />

        <ProjectBlock
          projectName="Project Three"
          projectBlurb="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quaerat quisquam! Recusandae adipisci, laboriosam quo, cupiditate, repellat iusto illum cum beatae harum ullam itaque autem tenetur voluptates officiis. Et, architecto!"
        />
      </div>
    </>
  );
}
