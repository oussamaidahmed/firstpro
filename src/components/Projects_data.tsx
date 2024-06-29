import Image from "next/image";
import Contact_Me_Button from "./Contact_Me_Button";

const Projects = [
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

export default function ProjectsData() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-7 bg-white place-items-center p-10 lg:px-[60px] md:px-[60px]">
      {Projects.map((project) => (
        <div
          key={project.id}
          className="relative border border-black w-[280px] h-[360px]"
        >
          <div className="p-5 absolute top-0 left-0 z-10">
            <h2 className="font-league-spartan font-bold text-lg text-white">{project.name}</h2>
            <p className="font-league-spartan font-normal text-md text-white">{project.description}</p>
          </div>
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    <Contact_Me_Button />
       
    </div>
  );
}
