import Link from "next/link"

import Image from "next/image"
import projectOne from '../../../public/img/projectOne.png'
import projectTwo from '../../../public/img/projectTwo.png'
import projectTree from '../../../public/img/projectTree.png'
import projectFour from '../../../public/img/pojectFour.png'
import projectFive from '../../../public/img/projectFive.png'
import projectSix from '../../../public/img/projectSix.png'
import git from '../../../public/img/git.svg'

import { M_PLUS_1 } from "next/font/google"


const mplus = M_PLUS_1({
  subsets: ['latin']
})


export default function Projects() {
  return (
    <main className="flex flex-col ">

      <h1 id="projects" className=" text-4xl my-10 font-bold ">Some Projects</h1>
      <div className="cards-global-container flex flex-col md:flex-row md:gap-2 md:flex-wrap  ">

        <div className="card-container my-5 flex flex-col justify-center bg-white w-80 rounded-md ">
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
            <div className="card-description w-fit m-4 text-black text-xs text-justify">Nagare BJJ is a martial arts school website that features a newsletter section connected to Mailchimp. Users can easily subscribe to receive updates and news from the school. This integration enables effective communication and engagement with the Nagare BJJ community.</div>
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
              OnlyFlash Tattoo is a web project built using Next.js and styled with Tailwind CSS. It is a platform that showcases a collection of minimalist flash tattoos designed by talented artists. The website offers a clean and intuitive user interface, allowing visitors to browse through different tattoo categories, view individual designs, and learn more about the artists behind them. The use of Next.js provides server-side rendering and efficient routing, ensuring a seamless browsing experience. Tailwind CSS enables a streamlined development process by offering a utility-first approach to styling, making it easy to create responsive and visually appealing designs. OnlyFlash Tattoo aims to provide a minimalist and user-friendly platform for tattoo enthusiasts to discover and appreciate the beauty of flash tattoos.
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
            <div className="card-title text-black mx-4">JSconf 2023 mokup</div>
            <div className="card-description w-fit m-4 text-black text-xs text-justify">
              I was assigned to create a mockup for JSConfCO 2023 using pure CSS. The design was based on a Figma file, and I implemented responsive features using CSS. The project involved creating a layout that showcased the event's information, schedule, and speaker lineup. The use of CSS allowed me to style and structure the elements according to the provided design guidelines. The final result was a visually appealing and responsive mockup for the JSConfCO 2023 event.
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
            <div className="card-title text-black mx-4">OWT-Project</div>
            <div className="card-description w-fit m-4 text-black text-xs text-justify">
              In collaboration with Vinnie Marciso from Brazil, we developed a visually stunning website for OWT, a tattoo shop. We utilized parallax and carousel design techniques to create an immersive user experience. The parallax effect added depth and movement, while the carousel showcased a selection of outstanding tattoo designs. The minimalist design highlighted the artwork, with a carefully chosen color palette and legible fonts. The responsive website ensured a seamless experience across devices. Together, we crafted a captivating online platform that embodies OWT's artistic identity.        </div>
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
            <div className="card-title text-black mx-4">React freecodecamp Projects</div>
            <div className="card-description w-fit m-4 text-black text-xs text-justify">
              I completed the FreeCodeCamp React course, where I developed various projects including a task application, calculator, and testimonial clone. The course provided comprehensive lessons on React fundamentals, component-based development, state management, and more. Through hands-on projects, I gained practical experience in building interactive user interfaces and implementing functionality using React's powerful features. The course deepened my understanding of React's ecosystem and best practices, equipping me with valuable skills for developing dynamic web applications.</div>
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



      <div className=" hover:font-extrabold md:hidden"><Link href='/'>Home</Link> </div>
      <span className=' w-full bg-white h-1 my-20'></span>


    </main>

  )
}
//https://github.com/vmrchs/OWT-Project