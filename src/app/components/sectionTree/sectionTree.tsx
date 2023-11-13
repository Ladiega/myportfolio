import Link from "next/link"

import Image from "next/image"
import projectOne from '../../../../public/img/projectOne.png'
import projectTwo from '../../../../public/img/projectTwo.png'
import git from '../../../../public/img/git.svg'
import Projects from '../Projects/projects'
import { Sawarabi_Mincho, M_PLUS_1 } from "next/font/google"

const sawarabi = Sawarabi_Mincho({
  subsets: ['latin'],
  weight: ['400']
})
const mplus = M_PLUS_1({
  subsets: ['latin']
})


export default function SectionTree() {
  return (
    <section className="">

      <Projects />


    </section>
  )
}