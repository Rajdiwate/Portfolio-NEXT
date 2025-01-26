'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Experience() {
  const experiences = [
    {
      title: "Junior Web Developer",
      company: "Zummit Infolabs",
      duration: "Feb 2023 - May 2023",
      description: "Developed responsive web applications using React JS and collaborated with senior developers to implement dynamic user interfaces, resulting in improved application interactivity and user experience."
    },
    {
      title: "Web Developer Intern",
      company: "TwoWaits",
      duration: "Feb 2022 - Marach 2022",
      description: "Served as a Tathastu Web Development Scholar Intern at TwoWaits Technologies Pvt. Ltd., where I focused on web development and improving my technical skills."
    },
    // {
      // title: "Open Source Contributor",
      // company: "Various Projects",
      // duration: "2021 - Present",
      // description: "Contributed to several open-source projects, focusing on accessibility and performance improvements."
    // }
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

