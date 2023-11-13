
import Link from "next/link";

import { Sawarabi_Mincho, M_PLUS_1 } from "next/font/google"
const sawarabi = Sawarabi_Mincho({
  subsets: ['latin'],
  weight: ['400']
});
const mplus = M_PLUS_1({
  subsets: ['latin']
})

export default function SectionTwo() {
  return (
    <section className=" flex flex-col">
      <h1 className="my-9 font-bold text-4xl"></h1>
      <div className={mplus.className}>
        <p className="my-2 w-80  font-extralight md:w-auto ">¡Hola! Soy Diego Gutiérrez Casallas, un apasionado Artista en busca de emocionantes oportunidades para iniciar mi carrera profesional en el campo de la programación y el desarrollo web. Hablo español como lengua materna. <br /><br />Tengo conocimientos en HTML, CSS y JavaScript, así como experiencia en el uso de frameworks como React y Next.js para crear aplicaciones web dinámicas y atractivas. <br /><br />

          Si estás buscando un desarrollador web motivado, creativo, y dedicado para unirme a tu equipo, me encantaría tener la oportunidad de hablar contigo y explorar cómo puedo contribuir a tu empresa.</p>

      </div>
      <div className="">
        <Link href="/about" className=" hover:font-extrabold">saber mas...</Link>
      </div>
    </section>
  )
}