'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "MyBlogs",
      description: " An online platform that allows users to create, publish, and manage blog posts",
      image: "/MyBlogs.png?height=200&width=300",
      link: "https://my-blogs-lemon.vercel.app/",
      code: "https://github.com/Rajdiwate/MyBlogs"
    },
    {
      title: "SilentSender",
      description: " An app that allows users to send messages to others without revealing their identity. ",
      image: "/SilentSender.png?height=200&width=300",
      link: "#",
      code: "https://github.com/Rajdiwate/SilentSender"
    },
    {
      title: "Tast Management",
      description: "A Full-Stack MERN task management app is a digital tool that helps users organize, track, and manage their tasks efficiently",
      image: "/TaskManagement.png?height=200&width=300",
      link: "https://task-management-mern-dun.vercel.app/",
      code: "https://github.com/Rajdiwate/TaskManagement-MERN"
    },
    {
      title: "TextUtils",
      description: "A Text Utils App is a simple web application that provides various text manipulation utilities ",
      image: "/TextUtils.png?height=200&width=300",
      link: "#",
      code: "https://github.com/Rajdiwate/TextUtils"
    },

  ]

  return (
    <section id="projects" className="mb-16">
      <motion.h2 
        className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </motion.div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20">
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

