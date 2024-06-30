import Image from "next/image";

export const Projects = [
  {
    id: 1,
    name: "Project 1",
    description: "Project 1 description",
    link: "https://www.google.com",
    image: "/images/Project_card.png",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Project 2 description",
    link: "https://www.google.com",
    image: "/images/Project_card.png",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Project 3 description",
    link: "https://www.google.com",
    image: "/images/Project_card.png",
  },
  {
    id: 4,
    name: "Project 4",
    description: "Project 4 description",
    link: "https://www.google.com",
    image: "/images/Project_card.png",
  },
  {
    id: 5,
    name: "Project 5",
    description: "Project 5 description",
    link: "https://www.google.com",
    image: "/images/Project_card.png",
  },
  {
    id: 6,
    name: "Project 6",
    description: "Project 6 description",
    link: "https://www.google.com",
    image: "/images/Project_card.png",
  },
];
export default function Projects_Data({ numProjectsToShow }: { numProjectsToShow: number }) {

  const projectsToShow = Projects.slice(0, numProjectsToShow);
  return (
    <div className=" justify-center place-items-center bg-white w-auto h-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-7   p-10 lg:px-[60px] md:px-[60px] ">
      {projectsToShow.map((project) => (
        <div key={project.id} className="relative  w-[282px] h-[354px]">
          <div className="p-5 absolute top-0 left-0 z-10">
            <h2 className="font-league-spartan font-bold text-lg text-white">
              {project.name}
            </h2>
            <p className="font-league-spartan font-normal text-md text-white">
              {project.description}
            </p>
          </div>
          <Image
            src={project.image}
            alt={project.name}
            width={280}
            height={354}
          />
        </div>
      ))}
    </div>
  );
}
