
import SectionOne from './components/secitonOne/sectionOne'
import SectionTwo from './components/sectionTwo/sectionTwo'
import SectionTree from './components/sectionTree/sectionTree'
import SectionFour from './components/sectionFour/sectionFour'
import Sticky from './components/sticky/sticky'
export default function Home() {
  return (
    <main className="">
    <Sticky/>
       <SectionOne/> 
      <SectionTwo/>  
      <SectionTree/>
      <SectionFour/>
      
     
    </main>
  )
}
