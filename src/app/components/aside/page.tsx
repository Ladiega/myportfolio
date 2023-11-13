import Image from "next/image"
import Portait from '../../../../public/img/portfolioProfile.png'
import Link from "next/link"



import git from '../../../../public/img/git2.svg'
import instagram from '../../../../public/img/instagram.svg'
import linkedin from '../../../../public/img/linkedin.svg'


export default function Aside() {
  return (
    <div className="hidden md:flex">
      <aside className="md:flex md:flex-col md:border-r md:h-screen">
        <div className="flex flex-col flex-warp gap-3">
          <div className=" md:text-6xl md:text-center md:my-auto md:-my-auto">
            <p className=" text-2xl">hola soy:</p>
            <h1>DiegoH</h1>
          </div>
          <div className="md:image-container ">
            <Image
              width={194}
              height={258}
              src={Portait}
              alt="Diego Image"
            />
          </div>
          <ul className="md:text-5xl md:flex md:flex-col md:text-center md:-my-2 ">

            <li className="hover:underline"><Link href='./about'>Bio</Link> </li>
            <li className="hover:underline"><Link href='./moreprojects'>Portafolio</Link> </li>
            <li className="hover:underline"><Link href='./contact'>Contacto</Link> </li>
          </ul>

          <footer className="md:my-4 md:w-28 md:flex md:felx-col md:text-center md:m-10">
            <div>


              <div className="logos-container md:flex md:marker: md:flex-row md:gap-3 ">
                <div className="logo">
                  <Link target='_blank' href='https://github.com/Ladiega'>
                    <Image
                      src={git}
                      alt="github"
                      width={30}
                    />
                  </Link>
                </div>
                <div className="logo">
                  <Link target='_blank' href='https://www.instagram.com/ladiegatattoo/'>
                    <Image
                      src={instagram}
                      alt="instagram"
                      width={30}
                    />
                  </Link>
                </div>
                <div className="logo">
                  <Link target='_blank' href='https://www.linkedin.com/in/diegohgc/'>
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      width={30}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </aside>


    </div>
  )
}