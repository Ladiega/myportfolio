import Link from "next/link"

import Image from "next/image"
import git from '../../../../public/img/git2.svg'
import instagram from '../../../../public/img/instagram.svg'
import linkedin from '../../../../public/img/linkedin.svg'

export default function SectionFour(){
  return(
    <footer className="">
      <div> 
        <h1 id="contact"className="text-4xl font-bold">Contact</h1>
        <div  className="logos-container flex flex-row gap-6 my-3 ">
          <div className="logo">
            <Link target='_blank' href='https://github.com/Ladiega'>
            <Image
            src={git}
            alt="github"
            />
            </Link>
          </div>
          <div className="logo">
          <Link target='_blank' href='https://www.instagram.com/ladiegatattoo/'>
            <Image
            src={instagram}
            alt="instagram"
            />
            </Link>
          </div>
          <div className="logo">
          <Link target='_blank' href='https://www.linkedin.com/in/diegohgc/'>
            <Image
            src={linkedin}
            alt="linkedin"
            />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}