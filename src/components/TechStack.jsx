import { technologies } from '../data/portfolio'
export default function TechStack() { return <section className="tech-section container" aria-label="Technology stack"><p>TECHNOLOGIES I WORK WITH</p><div className="tech-list">{technologies.map(tech => <div className="tech-item" key={tech.name}><b style={{color:tech.color}}>{tech.short}</b><span>{tech.name}</span></div>)}</div></section> }
