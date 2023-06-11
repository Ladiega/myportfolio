'use client'
import { useState, useEffect } from "react"
import Button from "../button/button";


export default function Sticky (){
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky-menu ${isSticky ? 'sticky' : ''}`}>
      <div className=" ul text-center">
        <div className="li"><Button/></div>
       
      </div>
    </nav>
  );


}