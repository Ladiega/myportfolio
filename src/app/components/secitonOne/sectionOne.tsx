
import Image from "next/image"
import Portait from '../../../../public/img/portfolioProfile.png'
import { Sawarabi_Mincho, M_PLUS_1 } from "next/font/google"

const sawarabi = Sawarabi_Mincho({
  subsets:['latin'],
  weight:['400']
})
const mplus = M_PLUS_1({
  subsets:['latin']
})

export default function SectionOne(){

 
  return(
    <section>
      <h1 id="aboutme" className="my-9 text-4xl font-bold">Portfolio</h1>
      <div className="image-container">
      <Image
      width={194}
      height={258}
      src={Portait}
      alt="Diego Image"
      />
      </div>
      <div className={mplus.className}>
      <div className=" text-container my-2 w-80 text-justify font-extralight">
        <p>`La utopía está en el horizonte. Camino dos pasos, ella se aleja dos pasos y el horizonte se corre diez pasos más allá ¿Entonces para que sirve la utopía? Para eso, sirve para caminar`</p>
        <p className="text-right">-Eduardo Galeano-</p>
      </div>
      </div>

    </section>
  )
}