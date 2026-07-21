from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_RIGHT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.lib.units import mm

OUT = r"C:\Users\Haroon\Desktop\potfolio\output\pdf\Muhammad-Awais-Resume.pdf"
NAVY, BLUE, PURPLE, TEXT, MUTED, LINE = map(HexColor, ['#07101F','#3578F6','#8557E8','#172033','#667085','#DDE3EE'])
doc = SimpleDocTemplate(OUT, pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=16*mm, bottomMargin=15*mm,
                        title='Muhammad Awais - Full Stack Developer Resume', author='Muhammad Awais')

styles = {
 'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=25, leading=29, textColor=NAVY, spaceAfter=3),
 'role': ParagraphStyle('role', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=BLUE, tracking=1.2),
 'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=8.5, leading=13, textColor=MUTED, alignment=TA_RIGHT),
 'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=PURPLE, tracking=1.4, spaceBefore=12, spaceAfter=7),
 'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.2, leading=14, textColor=TEXT),
 'item': ParagraphStyle('item', fontName='Helvetica', fontSize=8.8, leading=13, textColor=TEXT, leftIndent=9, firstLineIndent=-6),
 'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=NAVY),
 'meta': ParagraphStyle('meta', fontName='Helvetica', fontSize=8.3, leading=12, textColor=MUTED),
}

story=[]
header=Table([[Paragraph('Muhammad Awais',styles['name']),Paragraph('Pakistan<br/>awais@example.com<br/>github.com | linkedin.com',styles['contact'])],
              [Paragraph('FULL STACK DEVELOPER',styles['role']),'']], colWidths=[110*mm, 48*mm])
header.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('SPAN',(0,0),(0,0)),('LINEBELOW',(0,1),(-1,1),1,LINE),('BOTTOMPADDING',(0,1),(-1,1),8)]))
story += [header, Paragraph('PROFILE',styles['section']), Paragraph('Full-stack developer focused on building fast, accessible, and maintainable digital products. Experienced across modern frontend interfaces, server-side APIs, databases, and business websites, with an emphasis on clear communication and thoughtful product decisions.',styles['body'])]

story += [Paragraph('CORE SKILLS',styles['section'])]
skills=Table([[Paragraph('<b>Frontend</b><br/>React, Next.js, JavaScript, TypeScript, Tailwind CSS',styles['body']),Paragraph('<b>Backend</b><br/>Node.js, Express.js, REST APIs, MongoDB',styles['body']),Paragraph('<b>Delivery</b><br/>Responsive UI, accessibility, performance, Git, deployment',styles['body'])]],colWidths=[53*mm]*3)
skills.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),HexColor('#F4F6FB')),('BOX',(0,0),(-1,-1),.5,LINE),('INNERGRID',(0,0),(-1,-1),.5,LINE),('VALIGN',(0,0),(-1,-1),'TOP'),('PADDING',(0,0),(-1,-1),8)]))
story.append(skills)

story += [Paragraph('SELECTED PROJECTS',styles['section'])]
projects=[('CommerceFlow Platform','MERN stack commerce experience with product discovery, secure checkout, and an administration workflow.'),('Nexora SaaS','Conversion-focused Next.js product site with reusable components, responsive layouts, and performance-minded implementation.'),('Haven Real Estate','Business-focused property website with structured listings, intuitive discovery, and clear lead-generation paths.')]
for title,body in projects:
    story.append(KeepTogether([Paragraph(title,styles['title']),Paragraph(body,styles['meta']),Spacer(1,5)]))

story += [Paragraph('CAPABILITIES',styles['section'])]
for item in ['Full-stack web application development from interface to database.','Responsive frontend implementation with accessible interaction patterns.','Custom WordPress websites for service-based and property businesses.','Performance improvements, bug fixing, feature development, and maintainable refactoring.']:
    story.append(Paragraph('• '+item,styles['item']))

story += [Paragraph('WORKING STYLE',styles['section']),Paragraph('<b>Clean architecture</b> - Reusable code and maintainable systems designed to grow.<br/><b>Reliable delivery</b> - Clear milestones, transparent progress, and consistent execution.<br/><b>Product thinking</b> - Technical decisions connected to real user and business goals.<br/><b>Quality focus</b> - Responsive experiences with careful attention to performance and detail.',styles['body'])]
story += [Spacer(1,10), Paragraph('References and detailed project case studies are available on request.',styles['meta'])]
doc.build(story)
