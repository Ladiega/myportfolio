import Link from "next/link"

import Image from "next/image"
import projectOne from '../../../public/img/projectOne.png'
import projectTwo from '../../../public/img/projectTwo.png'
import projectTree from '../../../public/img/projectTree.png'
import projectFour from '../../../public/img/pojectFour.png'
import projectFive from '../../../public/img/projectFive.png'
import projectSix from '../../../public/img/projectSix.png'
import projectSatori from '../../../public/img/projectSatori.png'
import projectPokemon from '../../../public/img/projectPokemon.png'
import git from '../../../public/img/git.svg'

import Aside from "../components/aside/page"
import MoreProjects from '../components/Projects/projects'
import { M_PLUS_1 } from "next/font/google"


const mplus = M_PLUS_1({
  subsets: ['latin']
})


export default function Projects() {
  return (
    <main className=" mx-16">

      <div className="global-container flex
      ">
        <div className="fixed">
          <Aside />
        </div>

        <div className="md:mx-64">

          <div>
            <h1 id="projects" className=" text-4xl my-10 font-bold ">Proyectos:</h1>
          </div>
          <div className="max-w-sm">
            <p>Estos proyectos en los que he estado trabajando. Puedes encontrar estos y otros en mis repositorios en GitHub.</p>
          </div>
          <MoreProjects />


        </div>



      </div>
    </main>

  )
}
