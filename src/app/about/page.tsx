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
                            <h1 className='text-4xl font-bold my-2'>About Me:</h1>
                        </div>

                        <div className={mplus.className}>
                            <p className="my-2 w-80 font-extralight md:w-auto">Hello! I'm Diego, a passionate artist and tattoo artist with over 20 years of experience in the field. Throughout my artistic career, I've explored various forms of creative expression, always seeking new opportunities to grow and  learn.<br /><br />

                                In 2021, I discovered a new passion for web development, combining my artistic talent with technical skills. I'm proficient in languages like HTML, CSS, and JavaScript, and I have experience using frameworks like React and Next.js, allowing me to create unique and captivating visual experiences in my web projects.<br /><br />

                                Collaboration is essential in my work. I've had the opportunity to work on collaborative projects, such as a messenger cooperative in Brazil and with restaurants. These experiences have helped me refine my teamwork skills, effective communication, and adaptability in dynamic environments.<br /><br />

                                In addition to my artistic work, I've embarked on exciting bike trips throughout South America, immersing myself in the rich cultures of the region and connecting with people from diverse backgrounds. These experiences have broadened my artistic perspective and deepened my appreciation for cultural diversity.<br /><br />

                                I pay special attention to aesthetic design, and I'm passionate about creating intuitive and visually appealing interfaces. By combining my artistic talent, technical knowledge, and understanding of South American cultures, I can offer innovative and visually impactful solutions.<br /><br />

                                I'm always exploring new techniques and emerging trends in web design, aiming to improve my skills and deliver exceptional results. If you're looking for a versatile and passionate individual to join your team, with a strong artistic vision, I'd be delighted to be a part of it and bring your ideas to life.<br /><br />

                                Let's work together to create visually impressive experiences that leave a lasting impact on users!</p>
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