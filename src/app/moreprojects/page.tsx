import Link from "next/link"

import Image from "next/image"
import projectOne from '../../../public/img/projectOne.png'
import projectTwo from '../../../public/img/projectTwo.png'
import git from '../../../public/img/git.svg'

import {  M_PLUS_1 } from "next/font/google"


const mplus = M_PLUS_1({
  subsets:['latin']
})


export default function Projects(){
    return(
        <section className="flex flex-col">
      <h1 id="projects" className=" text-4xl my-10 font-bold">Some Projects</h1>
      <div className="card-container flex flex-col justify-center bg-white w-80 rounded-md">
        <div className="img-container flex justify-center">
          <Image
            src={projectOne}
           alt=""
          />
        </div>
        <div className={mplus.className}>
        <div className="card-title text-black mx-4">Hori-Hi website</div>
        <div className="card-description w-fit m-4 text-black text-xs text-justify">Hori-hi is a web project built with Next.js and CSS. It stands out for its responsive design created solely with CSS, without relying on additional frameworks. The dropdown menu is implemented using JavaScript injection, providing interactivity to the user. Additionally, React libraries, such as the video library, are utilized in the project. In summary, Hori-hi is a modern and adaptable web page that offers an intuitive and appealing user experience.</div>
        </div>
      <div className="card-git-logo mx-4">
        <Link target='_blank' href='https://github.com/Ladiega/horihiwebsite.git'>
        <Image
        className=""
        src= {git} 
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
        <div className="card-description w-fit m-4 text-black text-xs text-justify">Nagare BJJ is a martial arts school website that features a newsletter section connected to Mailchimp. Users can easily subscribe to receive updates and news from the school. This integration enables effective communication and engagement with the Nagare BJJ community.</div>
        </div>
      <div className="card-git-logo mx-4">
        <Link target='_blank' href='https://github.com/Ladiega/-Nagare.git'>
        <Image
        className=""
        src= {git} 
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
    <div className="section-four-a font-bold"><Link href='/'>Home</Link> </div>
    <span className=' w-full bg-white h-1 my-20'></span>

    
    </section>
    )
}