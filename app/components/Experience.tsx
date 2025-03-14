'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Experience() {
  const experiences = [
    {
      title: "Front End Developer",
      company: "Meask",
      duration: "December 2024 - Present",
      description: " Developed reusable components to facilitate faster development timelines and improve overall code quality. Collaborated with cross-functional teams to develop seamless integration of APIs, improving data flow within applications.Utilized Redux Toolkit for global state management , react router dom for seamless navigations. "
    },
    {
      title: "Python Developer Intern",
      company: "InternPe, Remote",
      duration: "March 2023 - April 2023",
      description: "Developed a notes application using Django and Django Rest Framework. Designed RESTful APIs to handle data interactions betweenfrontend and backend"
    },
    {
      title: "Web Developer Intern",
      company: "TXON, Remote",
      duration: "June 2022 - July 2022",
      description: "Developed the Landing Page of with React.js, implementing core UI features and managing state with Redux. Enhanced website functionality by optimizing code and implementing new features"
    },  
  ]

  return (
    <section id="experience" className="mb-16">
      <motion.h2 
        className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-colors duration-300">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{exp.company} | {exp.duration}</p>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

