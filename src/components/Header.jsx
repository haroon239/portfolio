import { useState } from 'react'
import { navItems } from '../data/portfolio'
export default function Header({ theme, onThemeChange }) {
  const [open, setOpen] = useState(false); const close = () => setOpen(false)
  return <header className="site-header"><a className="brand" href="#home" aria-label="Awais home" onClick={close}><span className="brand-mark">MA</span><span><strong>Muhammad Awais</strong><small>Full Stack Developer</small></span></a><nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}</nav><div className="header-actions"><button className="theme-toggle" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? '☾' : '☀'}</button><a className="button button-small" href="#contact">Let&apos;s talk <span>↗</span></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><span /><span /></button></div></header>
}
