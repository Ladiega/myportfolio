import Link from "next/link"
import { M_PLUS_1 } from "next/font/google"

import Aside from "../components/aside/page"

const mplus = M_PLUS_1({
    subsets: ['latin']
})

export default function About() {
    return (
        <main>
            <div className="global-container">
                <div className="main-container flex flex-row">
                    <div className="fixed"><Aside /></div>


                    <div className="flex flex-col md:p-3 md:mx-60">
                        <div>
                            <h1 className='text-4xl font-bold my-2'>Quien soy:</h1>
                        </div>

                        <div className={mplus.className}>
                            <p className="my-2 w-80 font-extralight md:w-auto">¡Hola! Soy Diego, un apasionado artista y tatuador con más de 20 años de experiencia en el campo. A lo largo de mi carrera artística, he explorado diversas formas de expresión creativa, siempre en busca de nuevas oportunidades para crecer y aprender.<br /><br />

                                En 2021, descubrí una nueva pasión por el desarrollo web, combinando mi talento artístico con habilidades técnicas. Tengo habilidades en lenguajes como HTML, CSS y JavaScript, y experiencia utilizando frameworks como React y Next.js, lo que me permite crear experiencias visuales únicas y cautivadoras en mis proyectos web.<br /><br />

                                La colaboración es esencial en mi trabajo. He tenido la oportunidad de trabajar en proyectos colaborativos, como una cooperativa de mensajería en Brasil y con restaurantes. Estas experiencias me han ayudado a perfeccionar mis habilidades de trabajo en equipo, comunicación efectiva y adaptabilidad en entornos dinámicos.<br /><br />

                                Además de mi trabajo artístico, me he embarcado en emocionantes viajes en bicicleta por toda América del Sur, sumergiéndome en las ricas culturas de la región y conectando con personas de diversos orígenes. Estas experiencias han ampliado mi perspectiva artística y profundizado mi aprecio por la diversidad cultural.<br /><br />

                                Presto especial atención al diseño estético y me apasiona crear interfaces intuitivas y visualmente atractivas. Al combinar mi talento artístico, conocimientos técnicos y comprensión de las culturas sudamericanas, puedo ofrecer soluciones innovadoras e impactantes visualmente.<br /><br />

                                Siempre estoy explorando nuevas técnicas y tendencias emergentes en diseño web, con el objetivo de mejorar mis habilidades y ofrecer resultados excepcionales. Si estás buscando a alguien versátil y apasionado para unirse a tu equipo, con una fuerte visión artística, estaré encantado de ser parte de ello y dar vida a tus ideas.<br /><br />

                                ¡Trabajemos juntos para crear experiencias visualmente impresionantes que dejen una huella duradera en los usuarios!</p>
                        </div>
                        <div className={mplus.className}>
                            <div className=" text-container my-5 w-80  font-extralight md:w-auto">
                                <p>`La utopía está en el horizonte. Camino dos pasos, ella se aleja dos pasos y el horizonte se corre diez pasos más allá ¿Entonces para que sirve la utopía? Para eso, sirve para caminar`</p>
                                <p className="text-right">-Eduardo Galeano-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}