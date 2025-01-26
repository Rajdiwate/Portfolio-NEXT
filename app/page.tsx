import { ScrollAnimationWrapper } from './components/ScrollAnimationWrapper'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ThemeProvider } from './components/theme-provider'
import Experience from './components/Experience'
import SocialMedia from './components/SocialMedia'
import Education from './components/Education'

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 text-foreground transition-colors duration-300">
        <Header />
        <ScrollAnimationWrapper>
          <div className="container mx-auto px-4 py-8">
            <Introduction />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <p className="text-center mt-4 mb-8">
              And many more projects are available on my{" "}
              <a
                href="https://github.com/Tej197"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub profile
              </a>
              .
            </p>
            <SocialMedia />
            <Contact />
          </div>
        </ScrollAnimationWrapper>
      </main>
    </ThemeProvider>
  )
}

