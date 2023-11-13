
import Link from "next/link"

import Image from "next/image"
import projectOne from '../../../../public/img/projectOne.png'
import projectTwo from '../../../../public/img/projectTwo.png'
import projectTree from '../../../../public/img/projectTree.png'
import projectFour from '../../../../public/img/pojectFour.png'
import projectFive from '../../../../public/img/projectFive.png'
import projectSix from '../../../../public/img/projectSix.png'
import projectSatori from '../../../../public/img/projectSatori.png'
import projectPokemon from '../../../../public/img/projectPokemon.png'
import git from '../../../../public/img/git.svg'



import { M_PLUS_1 } from "next/font/google"
const mplus = M_PLUS_1({
  subsets: ['latin']
})


export default function Projects() {
  return (
    <main>
      <div className="global-container flex
      ">
        <div className="main-container flex
        flex-col">
          <div className="cards-global-container flex flex-col md:flex-row md:gap-2 md:flex-wrap  ">
            <div className="card-container my-5 flex flex-col justify-center bg-white w-80 rounded-md ">
              <div className="img-container flex justify-center">
                <Link href='https://satorijiujitsu.com.co/'>
                  <Image
                    className="rounded "
                    src={projectSatori}
                    alt="satori website"
                    width={300}
                  />
                </Link>
              </div>
              <div className={mplus.className}>
                <div className="card-title text-black mx-4">Satori jiu-jitsu website</div>
                <div className="card-description w-fit m-4 text-black text-xs text-justify">

                  Satori, una web construida en HTML, CSS y JavaScript con el apoyo y orientación de Rodolfo Pertuz, combina elegancia visual y funcionalidad. El diseño fluido de HTML proporciona una navegación intuitiva, mientras que CSS aporta estilo y modernidad. JavaScript eleva la interactividad, dando vida a la página.

                  Los formularios, gestionados con PHP y MySQL bajo la tutela de Pertuz, aseguran una recopilación de datos eficiente y segura. Esta colaboración entre mentor y equipo ha dado como resultado una experiencia digital envolvente, donde la estética se encuentra con la eficacia técnica. Satori no es solo una página web; es un logro conjunto de aprendizaje y desarrollo.</div>
              </div>
              <div className="card-git-logo mx-4">
                <Link target='_blank' href='https://github.com/Ladiega'>
                  <Image
                    src={git}
                    alt='Satori project'
                  />
                </Link>
              </div>
              <div className="card-link-project text-black my-3 mx-4 cursor-pointer hover:text-slate-500">
                <Link target='_blank' href='https://satorijiujitsu.com.co'>https://satorijiujitsu.com.co</Link>
              </div>

              <div className="card-tec-container  flex flex-row  gap-5 text-black mx-4 my-4">
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">html</div>
                <div className="card-tec bg-gray-300 rounded-sm px-2 -py-2 shadow-md">css</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">js</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">php</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">mysql</div>
              </div>
            </div>


            <div className="card-container my-5 flex flex-col justify-center bg-white w-80 rounded-md ">
              <div className="img-container flex justify-center">
                <Link href='https://github.com/Ladiega/pokemonfreecodecamp'>
                  <Image
                    className="rounded my-3"
                    src={projectPokemon}
                    alt="pokemon project"
                    width={300}
                  />
                </Link>

              </div>
              <div className={mplus.className}>
                <div className="card-title text-black mx-4">Pokemon Index API</div>
                <div className="card-description w-fit m-4 text-black text-xs text-justify">El Pokémon Index es un proyecto práctico que utiliza JavaScript para conectarse a la API de Pokédex gratuita. Inspirado por el tutorial en español de FreeCodeCamp, el desarrollo se centra en proporcionar una experiencia sencilla y directa para explorar información detallada sobre Pokémon.

                  La implementación de JavaScript facilita la conexión dinámica con la API, permitiendo la obtención de datos actualizados de la Pokédex de manera eficiente. La interfaz, siguiendo las pautas del tutorial, ofrece una navegación intuitiva y una presentación clara de la información.

                  En conclusión, el Pokémon Index destaca por su funcionalidad directa y su capacidad para brindar datos precisos sobre Pokémon. El tutorial de FreeCodeCamp en español ha sido fundamental para guiar el desarrollo de este proyecto, proporcionando una introducción práctica al uso de API y JavaScript. Este ejercicio es una herramienta práctica y educativa para aquellos interesados en explorar el universo Pokémon a través de la programación web.</div>
              </div>
              <div className="card-git-logo mx-4">
                <Link target='_blank' href='https://github.com/Ladiega/pokemonfreecodecamp'>
                  <Image
                    className=""
                    src={git}
                    alt='Pokemon project'
                  />
                </Link>
              </div>
              <div className="card-link-project text-black my-3 mx-4 cursor-pointer hover:text-slate-500">
                <Link target='_blank' href='https://github.com/Ladiega/pokemonfreecodecamp'>https://github.com/Ladiega/pokemonfreecodecamp</Link>
              </div>
              <div className="card-tec-container  flex flex-row  gap-5 text-black mx-4 my-4">
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">html</div>
                <div className="card-tec bg-gray-300 rounded-sm px-2 -py-2 shadow-md">css</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">js</div>
              </div>
            </div>


            <div className="card-container my-5 flex flex-col justify-center bg-white w-80 rounded-md ">
              <div className="img-container flex justify-center">
                <Image
                  src={projectOne}
                  alt=""
                />
              </div>
              <div className={mplus.className}>
                <div className="card-title text-black mx-4">Hori-Hi website</div>
                <div className="card-description w-fit m-4 text-black text-xs text-justify">
                  Hori-hi es un proyecto web construido con Next.js y CSS, destacando por su diseño receptivo creado únicamente con CSS, sin depender de frameworks adicionales. La implementación del menú desplegable se realiza mediante inyección de JavaScript, brindando interactividad al usuario. Además, se hace uso de bibliotecas de React, como la biblioteca de videos, para mejorar la funcionalidad del proyecto. La interfaz visual ha sido diseñada con Figma, garantizando una presentación estética y funcional del contenido. En resumen, Hori-hi es una página web moderna y adaptable que ofrece una experiencia de usuario intuitiva y atractiva.
                </div>
              </div>
              <div className="card-git-logo mx-4">
                <Link target='_blank' href='https://github.com/Ladiega/horihiwebsite.git'>
                  <Image
                    className=""
                    src={git}
                    alt='hori-hi project'
                  />
                </Link>
              </div>
              <div className="card-link-project text-black my-3 mx-4 cursor-pointer hover:text-slate-500">
                <Link target='_blank' href='https://horihiwebsite.vercel.app/'>https://horihiwebsite.vercel.app/</Link>
              </div>
              <div className="card-tec-container  flex flex-row  gap-5 text-black mx-4 my-4">
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">nextjs</div>
                <div className="card-tec bg-gray-300 rounded-sm px-2 -py-2 shadow-md">css</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">js</div>
              </div>

            </div>

            <div className="card-container my-5 flex flex-col justify-center bg-white w-80 rounded-md">
              <div className="img-container flex justify-center">
                <Image
                  src={projectTwo}
                  alt=""
                />
              </div>
              <div className={mplus.className}>
                <div className="card-title text-black mx-4">Nagare bjj website</div>
                <div className="card-description w-fit m-4 text-black text-xs text-justify">Nagare BJJ es el sitio web de una escuela de artes marciales que incluye una sección de boletín conectada a Mailchimp. Los usuarios pueden suscribirse fácilmente para recibir actualizaciones y noticias de la escuela. Esta integración permite una comunicación efectiva y una mayor participación con la comunidad de Nagare BJJ.</div>
              </div>
              <div className="card-git-logo mx-4">
                <Link target='_blank' href='https://github.com/Ladiega/-Nagare.git'>
                  <Image
                    className=""
                    src={git}
                    alt='hori-hi project'
                  />
                </Link>
              </div>
              <div className="card-link-project text-black my-3 mx-4 cursor-pointer hover:text-slate-500">
                <Link target='_blank' href='https://nagare-five.vercel.app/'>https://horihiwebsite.vercel.app/</Link>
              </div>
              <div className="card-tec-container  flex flex-row  gap-5 text-black mx-4 my-4">
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">nextjs</div>
                <div className="card-tec bg-gray-300 rounded-sm px-2 -py-2 shadow-md">css</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">js</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">Mailchimp</div>
              </div>

            </div>


            <div className="card-container my-5 flex flex-col justify-center bg-white w-80 rounded-md">
              <div className="img-container flex justify-center my-2">
                <Image
                  src={projectTree}
                  alt="onlyflashtattoo"
                  width={285}
                  height={205}
                />
              </div>
              <div className={mplus.className}>
                <div className="card-title text-black mx-4">OnlyFlashTattoo</div>
                <div className="card-description w-fit m-4 text-black text-xs text-justify">
                  OnlyFlash Tattoo es un proyecto web construido con Next.js y estilizado con Tailwind CSS. Se trata de una plataforma que exhibe una colección de tatuajes flash minimalistas diseñados por talentosos artistas. El sitio web ofrece una interfaz de usuario limpia e intuitiva, permitiendo a los visitantes explorar diferentes categorías de tatuajes, ver diseños individuales y conocer más sobre los artistas detrás de ellos. El uso de Next.js proporciona renderización del lado del servidor y enrutamiento eficiente, garantizando una experiencia de navegación fluida. Tailwind CSS facilita un proceso de desarrollo simplificado al ofrecer un enfoque de utilidad primero para el estilo, lo que facilita la creación de diseños receptivos y visualmente atractivos. OnlyFlash Tattoo tiene como objetivo proporcionar una plataforma minimalista y amigable para los entusiastas de los tatuajes, permitiéndoles descubrir y apreciar la belleza de los tatuajes flash.
                </div>
              </div>
              <div className="card-git-logo mx-4">
                <Link target='_blank' href='https://github.com/Ladiega/onlyflashtattoo'>
                  <Image
                    className=""
                    src={git}
                    alt='hori-hi project'
                  />
                </Link>
              </div>
              <div className="card-link-project text-black my-3 mx-4 cursor-pointer hover:text-slate-500">
                <Link target='_blank' href='https://onlyflashtattoo.vercel.app/'>https://onlyflashtattoo.vercel.app/</Link>
              </div>
              <div className="card-tec-container  flex flex-row  gap-5 text-black mx-4 my-4">
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">nextjs</div>
                <div className="card-tec bg-gray-300 rounded-sm px-2 -py-2 shadow-md">Tailwindcss</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">react</div>

              </div>

            </div>


            <div className="card-container my-5 flex flex-col justify-center bg-white w-80 rounded-md">
              <div className="img-container flex justify-center my-2">
                <Image
                  src={projectFour}
                  alt="jsconf co"
                  width={285}
                  height={205}
                />
              </div>
              <div className={mplus.className}>
                <div className="card-title text-black mx-4">JSconf 2023 Maqueta</div>
                <div className="card-description w-fit m-4 text-black text-xs text-justify">
                  Me asignaron crear una maqueta para JSConfCO 2023 utilizando solo CSS. El diseño se basó en un archivo de Figma, y implementé funciones de respuesta utilizando CSS. El proyecto implicó la creación de una disposición que destacara la información del evento, el horario y la lista de ponentes. La utilización de CSS me permitió dar estilo y estructurar los elementos de acuerdo con las pautas de diseño proporcionadas. El resultado final fue una maqueta visualmente atractiva y receptiva para el evento JSConfCO 2023.
                </div>
              </div>
              <div className="card-git-logo mx-4">
                <Link target='_blank' href='https://github.com/Ladiega/jsconf2023'>
                  <Image
                    className=""
                    src={git}
                    alt='jsconf2023'
                  />
                </Link>
              </div>
              <div className="card-link-project text-black my-3 mx-4 cursor-pointer hover:text-slate-500">
                <Link target='_blank' href='https://jsconf23.vercel.app/'>https://jsconf23.vercel.app/</Link>
              </div>
              <div className="card-tec-container  flex flex-row  gap-5 text-black mx-4 my-4">
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">nextjs</div>
                <div className="card-tec bg-gray-300 rounded-sm px-2 -py-2 shadow-md">css</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">figma</div>

              </div>

            </div>


            <div className="card-container my-5 flex flex-col justify-center bg-white w-80 rounded-md">
              <div className="img-container flex justify-center my-2">
                <Image
                  src={projectFive}
                  alt="jsconf co"
                  width={285}
                  height={205}
                />
              </div>
              <div className={mplus.className}>
                <div className="card-title text-black mx-4">OWT</div>
                <div className="card-description w-fit m-4 text-black text-xs text-justify">
                  En colaboración con Vinnie Marciso de Brasil, y trabajando de manera conjunta entre Brasil y Colombia mediante el uso de Git, desarrollamos un sitio web visualmente atractivo para OWT, un estudio de tatuajes. Utilizamos técnicas de diseño de paralaje y carrusel para crear una experiencia de usuario inmersiva. El efecto de paralaje agregó profundidad y movimiento, mientras que el carrusel destacó una selección de destacados diseños de tatuajes. El diseño minimalista resaltó la obra de arte, con una paleta de colores cuidadosamente seleccionada y fuentes legibles. El sitio web responsive garantizó una experiencia fluida en diferentes dispositivos. Juntos, creamos una plataforma online cautivadora que refleja la identidad artística de OWT.      </div>
              </div>
              <div className="card-git-logo mx-4">
                <Link target='_blank' href='https://github.com/vmrchs/OWT-Project'>
                  <Image
                    className=""
                    src={git}
                    alt='jsconf2023'
                  />
                </Link>
              </div>
              <div className="card-link-project text-black my-3 mx-4 cursor-pointer hover:text-slate-500">
                <Link target='_blank' href='http://testjsconf2023.000webhostapp.com/'>http://testjsconf2023.000webhostapp.com/</Link>
              </div>
              <div className="card-tec-container  flex flex-row  gap-5 text-black mx-4 my-4">
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">html</div>
                <div className="card-tec bg-gray-300 rounded-sm px-2 -py-2 shadow-md">css</div>
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">js</div>

              </div>

            </div>

            <div className="card-container my-5 flex flex-col justify-center bg-white w-80 rounded-md">
              <div className="img-container flex justify-center my-2">
                <Image
                  src={projectSix}
                  alt="jsconf co"
                  width={285}
                  height={205}
                />
              </div>
              <div className={mplus.className}>
                <div className="card-title text-black mx-4">React freecodecamp</div>
                <div className="card-description w-fit m-4 text-black text-xs text-justify">
                  Completé el curso de React de FreeCodeCamp, donde desarrollé varios proyectos, incluyendo una aplicación de tareas, una calculadora y una clonación de testimonios. El curso proporcionó lecciones exhaustivas sobre los fundamentos de React, el desarrollo basado en componentes, la gestión del estado, entre otros temas. A través de proyectos prácticos, adquirí experiencia en la construcción de interfaces de usuario interactivas e implementé funcionalidades utilizando las potentes características de React. El curso profundizó mi comprensión del ecosistema de React y las mejores prácticas, brindándome habilidades valiosas para el desarrollo de aplicaciones web dinámicas.</div>
              </div>
              <div className="card-git-logo mx-4">
                <Link target='_blank' href='https://github.com/Ladiega/aprendiendoReactFreecadecamp'>
                  <Image
                    className=""
                    src={git}
                    alt='react course'
                  />
                </Link>
              </div>
              <div className="card-link-project text-black my-3 mx-4 cursor-pointer hover:text-slate-500">
                <Link target='_blank' href='https://github.com/Ladiega/aprendiendoReactFreecadecamp'>https://github.com/Ladiega/aprendiendoReactFreecadecamp</Link>
              </div>
              <div className="card-tec-container  flex flex-row  gap-5 text-black mx-4 my-4">
                <div className="card-tec  bg-gray-300 rounded-sm px-2 -py-2 shadow-md ">React</div>


              </div>

            </div>



          </div>

          <div>
            <div className=" hover:font-extrabold md:hidden"><Link href='/'>Home</Link> </div>
            {/* <span className=' w-full bg-white h-1 my-20'></span> */}
          </div>

        </div>





      </div>
    </main>

  )
}