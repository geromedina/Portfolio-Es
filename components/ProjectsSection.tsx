import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "FromZeroToDev",
    description:
      "FromZeroToDev es una plataforma de cursos asincrónicos creada en un grupo de 6 personas utilizando metodologías ágiles SCRUM. Cuenta con autenticación de usuario con Auth0, pasarela de pago, tablero para el admin, mailing. Usamos TypeScript, Redux Toolkit, Tailwind, MongoDB y Mongoose.",
    image: "/project1.png",
    github: "https://github.com/geromedina/FromZeroToDev",
    link: "https://from-zero-to-dev-posta.vercel.app/",
  },
  {
    name: "CRM GraphQL",
    description: "CRM es una aplicación hecha con el stack React, Next.js, GraphQL, Apollo, MongoDB, Tailwind y Formik.",
    image: "/project3.png",
    github: "https://github.com/geromedina/crmcliente",
    link: "https://github.com/geromedina/crmcliente",
  },
  {
    name: "Pokemon APP",
    description: "Pokemon App es una aplicacion que hice para mi proyecto individual del bootcamp #SoyHenry, utilizando el stack de tecnologias: React, Redux, Node, Express y Sequelize.",
    image: "/project3.png",
    github: "https://github.com/geromedina/Pokemon-Project",
    link: "https://deploy-pokemon-coral.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="portfolio">
      <h1 className="my-10 text-center font-bold text-4xl">
        Mis Trabajos
        <hr className="w-6 h-1 mx-auto my-4 bg-pink-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
