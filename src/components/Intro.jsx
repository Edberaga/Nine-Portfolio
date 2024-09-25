import { motion } from 'framer-motion'
import React from 'react'

const Intro = () => {
  return (
    <section>
        <motion.h1
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.34,
            ease: 'easeInOut'
          }}
        >
          Hello, Welcome to my Portfolio
        </motion.h1>
    </section>
  )
}

export default Intro