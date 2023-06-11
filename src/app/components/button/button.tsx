'use client'

import { useState } from "react"
import Link from "next/link";
export default function Button(){
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return(
    <div className="relative my-5">
      <button
        className={`hamburger-menu ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <div className="menu-dropdown absolute   bg-white rounded shadow p-4">
          <ul className="space-y-2">
            <li>
              <Link href="#aboutme" className="text-gray-800 ">
                About Me
              </Link>
            </li>
           
            <li>
              <Link href="#projects" className="text-gray-800 ">
                Some Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-800 ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}