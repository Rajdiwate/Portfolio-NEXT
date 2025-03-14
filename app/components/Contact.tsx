'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // Add your Web3Forms access key here
  const ACCESS_KEY = '41237591-f4b8-4770-933e-72dbe60abc9b'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData()
      formData.append('access_key', ACCESS_KEY)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('message', message)
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        })
        // Reset form fields
        setName('')
        setEmail('')
        setMessage('')
      } else {
        throw new Error(data.message || 'Something went wrong!')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <motion.section
      id="contact"
      className="mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <motion.form 
        onSubmit={handleSubmit} 
        className="max-w-lg"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-4" variants={itemVariants}>
          <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
            Name
          </label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-primary/20 focus:border-primary"
            disabled={isLoading}
          />
        </motion.div>
        <motion.div className="mb-4" variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
            Email
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-primary/20 focus:border-primary"
            disabled={isLoading}
          />
        </motion.div>
        <motion.div className="mb-4" variants={itemVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
            Message
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            className="border-primary/20 focus:border-primary"
            disabled={isLoading}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>
      </motion.form>
      <Toaster />
    </motion.section>
  )
}