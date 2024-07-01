import React from 'react'
import Image from 'next/image'


const skills = [

  {
    name: "HTML",
    src: "/images/HTML5.png",
  },
  {
    name: "CSS",
    src: "/images/CSS3.png",
  },
  {
    name: "JavaScript",
    src: "/images/JavaScript.png",
  },
  {
    name: "Figma",
    src: "/images/Figma.png",
  },
  {
    name: "ReactJS",
    src: "/images/React.png",
  },
  {
    name: "VsCode",
    src: "/images/VScode.png",
  },
  {
    name: "Git",
    src: "/images/Shape.png",
  },
  {
    name: " NPM",
    src: "/images/NPM.png",
  },
  {
    name: " NodeJS",
    src: "/images/NodeJS.png",
  },
  {
    name: "Chrome",
    src: "/images/Chrome.png",
  },
]

export default function My_skills() {
  return (
    <div className=''>
      <h1 className="text-black font-league-spartan font-bold text-3xl tracking-tight ">
      My skills
      </h1>
      <ul className=" grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3 grid-cols-2   gap-6  pt-6 w-auto max-w-[600px]">
        {skills.map((skill) => (
          <li key={skill.name} className="flex gap-2">
            <Image src={skill.src} alt={skill.name} width={20} height={15} />
            <span className=" font-medium" >{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
