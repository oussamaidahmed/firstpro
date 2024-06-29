const Projects = [
  {
    id: 1,
    name: "Project 1",
    description: "Project 1 description",
    link: "https://www.google.com",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Project 2 description",
    link: "https://www.google.com",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Project 3 description",
    link: "https://www.google.com",
  },
  {
    id: 4,
    name: "Project 4",
    description: "Project 4 description",
    link: "https://www.google.com",
  },
  {
    id: 5,
    name: "Project 5",
    description: "Project 5 description",
    link: "https://www.google.com",
  },
  {
    id: 6,
    name: "Project 6",
    description: "Project 6 description",
    link: "https://www.google.com",
  },
];

export default function Projects_data() {
  return (
    <div className="grid grid-cols-3 gap-6 bg-white justify-center items-center text-center p-10 ">
      {Projects.map((project) => (
        <div key={project.id }  className="border border-black p-6">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
