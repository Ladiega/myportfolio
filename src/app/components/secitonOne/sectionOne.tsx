
import Image from "next/image"
import Portait from '../../../../public/img/portfolioProfile.png'
import { Sawarabi_Mincho, M_PLUS_1 } from "next/font/google"

const sawarabi = Sawarabi_Mincho({
  subsets: ['latin'],
  weight: ['400']
})
const mplus = M_PLUS_1({
  subsets: ['latin']
})

export default function SectionOne() {


  return (
    <section>
      <h1 id="aboutme" className="my-9 text-4xl font-bold">Portafolio</h1>
      <div className="image-container">
        <Image
          width={194}
          height={258}
          src={Portait}
          alt="Diego Image"
        />
      </div>


    </section>
  )
}