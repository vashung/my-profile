"use client"
import React, { useEffect, useState, router } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { motion, useScroll,useAnimationControls, Variants } from 'framer-motion';


const isBrowser = () => typeof window !== 'undefined'; 

const GoTopButton = () => {
 const [isVisible, setIsVisible] = useState(false)

    useEffect(() =>{
    const toggleVisible = () =>{
      window.scrollY > 300 ? setIsVisible(true): setIsVisible(false);
    }   
    window.addEventListener("scroll", toggleVisible)
    return ( ) =>{
      window.removeEventListener("scroll", toggleVisible)
    }
  }, [])
  
  const scrollToTop = (e) =>{
      e.preventDefault();
      if(!isBrowser()) return;

      window.scrollTo({top: 0, behavior: 'smooth'})
     // router.push('/' + '?', {scroll : false})
    
  }

  return (
    <motion.button
      initial="hide"
      className={`bottom-10 fixed xl:right-4 md:right-2 right-1 ${
        isVisible ? "opacity-100" : "opacity-0" }`}
    
      onClick={(e) => scrollToTop(e)}>
      <ArrowUpIcon className='size-10 text-white-500' />
    </motion.button>
  )
}

export default GoTopButton;