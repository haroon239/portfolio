import { useState } from 'react'
import { navItems } from '../data/portfolio'
import logo from '../assets/logo.png'
export default function Header({ theme, onThemeChange }) {
  const [open, setOpen] = useState(false); const close = () => setOpen(false)
  return <header className="site-header"><a className="brand" href="#home" aria-label="Muhammad Haroon home" onClick={close}><img className="brand-logo" src={logo} alt="Muhammad Haroon — Full Stack Developer" /></a><nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}</nav><div className="header-actions"><button className="theme-toggle" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? '☾' : '☀'}</button><a className="button button-small" href="#contact">Let&apos;s talk <span>↗</span></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><span /><span /></button></div></header>
}
