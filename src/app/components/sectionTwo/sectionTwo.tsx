
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
    <section>
      <h1 className="my-9 font-bold text-4xl ">About Me</h1>
      <div className={mplus.className}>
        <p className="my-2 w-80  font-extralight md:w-auto md:h-screen">Hello! I`m Diego Gutierrez Casallas, a passionate self-taught web developer in search of exciting opportunities to kickstart my professional career in the programming field. I speak Spanish as a native language, have a C1 level in Portuguese, and a B1 level in English. <br /><br />I have knowledge in HTML, CSS, and JavaScript, as well as experience using frameworks like React and Next.js to create dynamic and engaging web applications.<br /><br />

          If you`re looking for a motivated and dedicated web developer to join your team, I would love the opportunity to speak with you and explore how I can contribute to your company!</p>

      </div>
      <div>
        <Link href="/about" className=" hover:font-extrabold">More...</Link>
      </div>
    </section>
  )
}