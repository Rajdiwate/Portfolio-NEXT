'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Code  } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SocialMedia() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Rajdiwate' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/rajdiwate/' },
    { name: 'LeetCode', icon: Code, url: 'https://leetcode.com/u/rajdiwate786/' },
  ]

  return (
    <section id="social-media" className="mb-16">
      <motion.h2 
        className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Connect With Me
      </motion.h2>
      <motion.div 
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-4 w-4" />
                <span className="sr-only">{link.name}</span>
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

