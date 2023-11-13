import Image from "next/image"
import Portait from '../../../public/img/portfolioProfile.png'
import Link from "next/link"

import About from "../about/page"


import Aside from "../components/aside/page"
import SectionTwo from "../components/sectionTwo/sectionTwo"
import SectionTree from "../components/sectionTree/sectionTree"
import SectionFour from "../components/sectionFour/sectionFour"
export default function Desktop() {
  return (
    <div>
      <div className="md:hidden">
        <SectionTwo />
      </div>
      <div className="hidden md:flex">

        <main className="md:flex md:justify-center  ">
          <div className="global-container flex flex-row">
            <div className="fixed"><Aside /></div>
            <div className="md:mx-64">
              <div> <SectionTwo /></div>
              <div><SectionTree /></div>
              <div><SectionFour /></div>

            </div>
          </div>

        </main>
      </div>
    </div>
  )
}