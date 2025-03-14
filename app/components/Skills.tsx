'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [ "C++", "Java" ,"JavaScript", "Python", "TypeScript"]
    },
    {
      category: "Frameworks",
      skills: ["React JS", "Next.js", "Express JS"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Cloud",
      skills: ["AWS EC2","AWS S3", "AWS CodePipeline", "Docker" , "Git"]
    },
    {
      category: "Platform",
      skills: ["Visual Studio Code", "Eclipse IDE" , "Postman" , "Cloudinary" ,"Google Play Console" , "Bit-Bucket", "GitHub" ]
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Problem-solving", "Email etiquette"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="skills" className="mb-16">
      <motion.h2 
        className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  className="flex items-center"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-2"></span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

