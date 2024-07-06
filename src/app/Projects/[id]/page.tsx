import { metadata } from "@/app/layout";
import { Projects } from "@/components/Projects_data";

export default function Page({
  params,
}: {
  params: { id: string };
}): JSX.Element {
  const project = Projects.find(
    (project) => project.id.toString() === params.id
  );
  metadata.title = `Project ${project?.name} | Projects`;
  if (!project) {
    return (
      <div className="relative top-32 place-items-center h-screen">
        <h1 className="text-white text-5xl font-black  flex justify-center self-center ">
          Missing Project
        </h1>
      </div>
    );
  }
  return (
    <div className="relative top-32 place-items-center h-screen">
      <h1 className="text-white text-2xl font-black  flex justify-center self-center ">
        Project ID: {project.id}
      </h1>
      <h1 className="text-white text-xl font-black  flex justify-center self-center ">
        Project Name: {project.description}
      </h1>
    </div>
  );
}
