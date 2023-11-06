import Aside from "../components/aside/page"
import Link from "next/link"




import Image from "next/image"
import Photo from '../../../public/img/contactPhoto.jpg'
import git from '../../../public/img/git2.svg'
import instagram from '../../../public/img/instagram.svg'
import linkedin from '../../../public/img/linkedin2.svg'

export default function Contact() {
  return (
    <main className="flex flex-col md:flex">
      <div className="globla-container flex flex-col">

        <div className="fixed">
          <Aside />
        </div>

        <div className="flex flex-col p-3 mx-96 my-80  gap-7 ">
          <div className="flex flex-col gap-3 ">
            <div className="text-center text-4xl">diegogutierrezcasallas@gmail.com</div>
            <div className="">
              <Image
                src={Photo}
                alt="contact photo"
                className=" rounded-full"
              />
            </div>
            <div className="link-container flex justify-center gap-4 my-10">
              <div><Link href="https://github.com/Ladiega" target='_blank'>
                <Image
                  src={git}
                  alt="github"
                  width={30}
                />
              </Link>
              </div>
              <div><Link href="https://www.instagram.com/ladiegatattoo/" target='_blank'>
                <Image
                  src={instagram}
                  alt="github"
                  width={30}
                />
              </Link>
              </div>
              <div><Link href="https://www.linkedin.com/in/diegohgc/" target='_blank'>
                <Image
                  src={linkedin}
                  alt="github"
                  width={30}
                />
              </Link>
              </div>
            </div>
          </div>


        </div>

      </div>

    </main>
  )
}