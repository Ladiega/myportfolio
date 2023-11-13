
import SectionOne from './components/secitonOne/sectionOne'
import SectionTwo from './components/sectionTwo/sectionTwo'
import SectionTree from './components/sectionTree/sectionTree'
import SectionFour from './components/sectionFour/sectionFour'
import Desktop from './desktop/page'


export default function Home() {
  return (
    <main className="">
      <div className='md:hidden'>
        <SectionOne />
        <SectionTwo />
        <SectionTree />
        <SectionFour />
      </div>
      <div className='hidden md:flex ' >
        <Desktop />



      </div>




    </main>
  )
}
