'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const education = {
    degree: "B.E in Computer Engineering",
    institution: "Sinhgad Institute, SPPU",
    duration: "2020-2024",
    cgpa: "8.28"
  }

  return (
    <section id="education" className="mb-16">
      <motion.h2 
        className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-colors duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div>
              <CardTitle>{education.degree}</CardTitle>
              <p className="text-sm text-muted-foreground">{education.institution}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p><strong>Duration:</strong> {education.duration}</p>
            <p><strong>CGPA:</strong> {education.cgpa}</p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

