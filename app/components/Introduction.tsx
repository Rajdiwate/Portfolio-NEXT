'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FileDown } from 'lucide-react'

export default function Introduction() {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="about" className="mb-16">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/3 mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05, rotate: 5 }}
            animate={floatingAnimation}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-75"></div>
            <Image
              src="/profile.jpg?height=300&width=300"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full shadow-lg border-4 border-primary relative z-10"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-2/3 md:pl-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Raj Diwate
          </motion.h1>
          <motion.h2 
            className="text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Software Engineer 
          </motion.h2>
          <motion.p 
            className="text-foreground/80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hello! I am a Full Stack Engineer specializing in  React , Node , Express , javascript TypeScript, and Next.js. I build end-to-end web solutions, from RESTful APIs to automation workflows. With experience in both dynamic and static websites, I excel at executing complex projects independently in remote environments.
          </motion.p>
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              <a href="/Raj_cv_resume_2025.pdf" download>
                <FileDown className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

