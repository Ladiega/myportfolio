


import { Sawarabi_Mincho, M_PLUS_1 } from "next/font/google"
const sawarabi = Sawarabi_Mincho({
  subsets:['latin'],
  weight:['400'] 
});
const mplus = M_PLUS_1({
  subsets:['latin']
})

export default function SectionTwo(){
  return(
    <section>
      <h1 className="my-9 font-bold text-4xl ">About Me</h1>
      <div className={mplus.className}>
      <p className="my-2 w-80 text-justify font-extralight">Hello! I`m Diego Gutierrez Casallas, a passionate self-taught web developer in search of exciting opportunities to kickstart my professional career in the programming field. I have strong knowledge in HTML, CSS, and JavaScript, as well as experience using frameworks like React and Next.js to create dynamic and engaging web applications.
I`m a lifelong learner and always eager to acquire new knowledge to enhance my skills. I enjoy exploring the latest trends in web development and applying them in my projects to deliver innovative and high-quality solutions.
I possess a creative mindset and meticulous attention to detail, allowing me to create intuitive user interfaces and compelling web experiences. I also have analytical and problem-solving skills, which help me tackle challenges and find efficient solutions.
As a self-taught developer, I have developed personal projects to apply and strengthen my skills. Now, I`m excited to bring my knowledge and enthusiasm to a work environment where I can collaborate in a team and learn from experienced professionals.
I`m seeking an opportunity to grow as a junior web developer, where I can apply my technical skills and engage in continuous learning. I`m a proactive and committed individual with a strong desire to contribute to team success and add value to projects.
If you`re looking for a motivated and dedicated web developer to join your team, I would love the opportunity to speak with you and explore how I can contribute to your company!</p>
      </div>
    </section>
  )
}