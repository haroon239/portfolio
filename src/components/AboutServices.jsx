import { services } from '../data/portfolio'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

const icons = ['⌘', '✦', '◇']
const serviceImages = [image1, image2, image3]

export default function AboutServices() {
  return <div className="premium-zone"><section className="section about-section container" id="about"><div className="about-heading"><p className="eyebrow">ABOUT ME</p><h2>Crafting digital work<br/>with <span>purpose.</span></h2><div className="signature-line"><i/><small>Code · Design · Strategy</small></div></div><div className="about-story"><span className="story-index">01 / WHO I AM</span><p className="about-lead">I turn ambitious ideas into digital products people enjoy using.</p><p>My work lives at the intersection of thoughtful design and dependable engineering. Every interface is considered, every interaction has a reason, and every system is built with tomorrow in mind.</p><div className="about-meta"><div><strong>02+</strong><span>Years building</span></div><div><strong>20+</strong><span>Projects shaped</span></div><div><strong>∞</strong><span>Curiosity</span></div></div></div></section><section className="section services-section container" id="services"><div className="services-top"><div><p className="eyebrow">WHAT I DO</p><h2>Expertise that moves<br/><span>ideas forward.</span></h2></div><p>End-to-end digital craftsmanship—from product thinking and interface systems to reliable engineering and launch.</p></div><div className="services-grid">{services.map(([number,title,text],index)=><article className={`service-card service-${index+1} ${serviceImages[index]?'has-media':''}`} key={title}>{serviceImages[index]&&<div className="service-media"><img src={serviceImages[index]} alt="" loading="lazy"/><span/></div>}<div className="service-topline"><span>{number}</span><b>{icons[index]}</b></div><div className="service-copy"><h3>{title}</h3><p>{text}</p></div><a href="#contact" aria-label={`Discuss ${title}`}>Explore service <span>↗</span></a></article>)}</div></section></div>
}
