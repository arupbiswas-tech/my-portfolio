import { useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import { createPortfolioTheme } from './theme/theme.js'

function App() {
  const [mode, setMode] = useState('light')
  const theme = useMemo(() => createPortfolioTheme(mode), [mode])

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} onToggleMode={toggleMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
