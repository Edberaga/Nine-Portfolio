import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section>
        <motion.h2
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1
          }}
        >About Me
        </motion.h2>
        <motion.p
        initial={{ rotate: 180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        >
        My name is Nine, and I'm a Photographer.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
        tristique ex, in consectetur ipsum bibendum at. Nullam auctor ex
        orci, sed tristique felis consectetur et. Duis sed justo vel neque
        pellentesque tincidunt. Sed in libero vel ipsum semper hendrerit et eu
        nulla. Sed sagittis, neque eu placerat iaculis, lectus justo pellentesque
        lacus, at vulputate justo metus nec neque.
        </motion.p>
    </section>
  )
}

export default About