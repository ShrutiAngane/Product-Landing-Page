import React,{useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import { useAnimation,useInView } from 'framer-motion'

const Animate = ({children}) => {
    const ref=useRef(null)
    const isInView=useInView(ref,{once:'true'})
    const mainControls=useAnimation()
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView,mainControls])

  return (
    <div className='w-[100%]' ref={ref}>
      <motion.div
      variants={{
        hidden:{opacity: 0,y:-170},
        visible:{opacity: 1,y:0},
      }}
      initial='hidden'
      transition={{duration:1}}
      animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Animate
