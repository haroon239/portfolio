import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme) }, [theme])
  return <div className="app-shell"><Header theme={theme} onThemeChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /><main><Hero /><TechStack /><Projects /><Expertise /><Contact /></main><Footer /></div>
}
export default App
