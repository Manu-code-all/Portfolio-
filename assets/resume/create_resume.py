from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer


OUTPUT_PATH = r"C:\Users\manug\Downloads\claud\output\pdf\Manu_Gupta_Resume.pdf"

INK = colors.HexColor("#162033")
MUTED = colors.HexColor("#536174")
ACCENT = colors.HexColor("#2563A6")
RULE = colors.HexColor("#C9D2DF")


def link(label, url):
    return f'<link href="{url}" color="{ACCENT.hexval()}"><u>{label}</u></link>'


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="Name", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=19,
    leading=22, alignment=TA_CENTER, textColor=INK, spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="Headline", parent=styles["Normal"], fontName="Helvetica", fontSize=9.4,
    leading=12, alignment=TA_CENTER, textColor=MUTED, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.8,
    leading=11, alignment=TA_CENTER, textColor=MUTED, spaceAfter=7,
))
styles.add(ParagraphStyle(
    name="Section", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.3,
    leading=11, textColor=ACCENT, spaceBefore=8, spaceAfter=3, uppercase=True,
))
styles.add(ParagraphStyle(
    name="Body", parent=styles["Normal"], fontName="Helvetica", fontSize=9,
    leading=11.3, textColor=INK, spaceAfter=2.2,
))
styles.add(ParagraphStyle(
    name="ResumeBullet", parent=styles["Body"], leftIndent=10, firstLineIndent=-6,
    bulletIndent=0, spaceAfter=1.5,
))
styles.add(ParagraphStyle(
    name="Project", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.8,
    leading=11.6, textColor=INK, spaceBefore=3.5, spaceAfter=1,
))
styles.add(ParagraphStyle(
    name="Meta", parent=styles["Normal"], fontName="Helvetica", fontSize=8.7,
    leading=10.6, textColor=MUTED, spaceAfter=2.2,
))


def section(title):
    return [Paragraph(title, styles["Section"]), HRFlowable(width="100%", thickness=0.55, color=RULE, spaceAfter=3)]


story = []
story.extend([
    Paragraph("MANU GUPTA", styles["Name"]),
    Paragraph("Software Development Intern Candidate | Java Backend &amp; Web Development", styles["Headline"]),
    Paragraph(
        "Greater Noida, India &nbsp;|&nbsp; "
        + link("manug9868@gmail.com", "mailto:manug9868@gmail.com")
        + " &nbsp;|&nbsp; " + link("+91 89207 46866", "tel:+918920746866")
        + " &nbsp;|&nbsp; " + link("LinkedIn", "https://www.linkedin.com/in/manu-gupta-176ba91b8/")
        + " &nbsp;|&nbsp; " + link("GitHub", "https://github.com/Manu-code-all")
        + " &nbsp;|&nbsp; " + link("LeetCode", "https://leetcode.com/u/manug9868/")
        + " &nbsp;|&nbsp; " + link("GeeksforGeeks", "https://www.geeksforgeeks.org/user/manug9868/"),
        styles["Contact"],
    ),
    HRFlowable(width="100%", thickness=0.9, color=INK, spaceAfter=3),
])

story.extend(section("Profile"))
story.append(Paragraph(
    "Third-year B.Tech Computer Science student pursuing software-development internships. "
    "Builds Java and web applications with an interest in clean application structure, database-backed workflows, and dependable user experiences.",
    styles["Body"],
))

story.extend(section("Education"))
story.append(Paragraph("<b>Galgotia University</b>, India", styles["Body"]))
story.append(Paragraph("B.Tech, Computer Science &nbsp;|&nbsp; Sep 2024 - Expected 2028 &nbsp;|&nbsp; CGPA: 7.7 / 10.0", styles["Meta"]))
story.append(Paragraph("Relevant coursework: Data Structures &amp; Algorithms, DBMS, Computer Organization &amp; Architecture, Advanced Java", styles["Body"]))

story.extend(section("Projects"))
projects = [
    (
        "Student Management System",
        "Java · File I/O · OOP",
        "https://github.com/Manu-code-all/StudentMarksCGPA-Java.git",
        [
            "Built a Java console application to record student marks in a local file, validate inputs, calculate grade-point averages, and display marksheets by admission number.",
            "Organized record entry, lookup, calculation, and validation into dedicated service, model, and utility classes.",
        ],
    ),
    (
        "Medicity",
        "HTML · CSS/SCSS · JavaScript/jQuery · Vercel",
        "https://github.com/Manu-code-all/Medicity.git",
        [
            "Built a multi-page healthcare website covering appointments, doctors, departments, services, shop, and contact experiences.",
            "Implemented the front-end with static HTML, CSS/SCSS, and JavaScript/jQuery; configured a Vercel root rewrite for the site entry page.",
        ],
    ),
    (
        "Online Job Portal",
        "Java · JSP · Servlets · JDBC · MySQL · Maven · Tomcat",
        "https://github.com/Manu-code-all/Job-Portal-Webapp-Java-final-project.git",
        [
            "Developed an academic Java web application for employers to manage jobs, job seekers to submit applications, and administrators to manage users and job approval.",
            "Applied MVC with JSP views, Servlet controllers, DAO-based JDBC persistence, HikariCP connection pooling, session routing, and explicit approval/audit transactions.",
        ],
    ),
]
for title, stack, url, bullets in projects:
    block = [
        Paragraph(link(title, url), styles["Project"]),
        Paragraph(stack, styles["Meta"]),
    ]
    block.extend(Paragraph(text, styles["ResumeBullet"], bulletText="•") for text in bullets)
    story.append(KeepTogether(block))

story.extend(section("Technical Skills"))
story.append(Paragraph("<b>Languages:</b> Java, C, JavaScript, SQL", styles["Body"]))
story.append(Paragraph("<b>Web:</b> HTML, CSS, React.js, Node.js, Express.js", styles["Body"]))
story.append(Paragraph("<b>Databases &amp; Tools:</b> MySQL, MongoDB, JDBC, Maven, Apache Tomcat, Git, GitHub", styles["Body"]))

story.extend(section("Achievement"))
story.append(Paragraph("<b>Smart India Hackathon</b> &nbsp;|&nbsp; Sep 2025", styles["Body"]))
story.append(Paragraph("Qualified and ranked among the top 130 teams out of 500+ teams.", styles["Body"]))

doc = SimpleDocTemplate(
    OUTPUT_PATH,
    pagesize=A4,
    rightMargin=17 * mm,
    leftMargin=17 * mm,
    topMargin=13 * mm,
    bottomMargin=13 * mm,
    title="Manu Gupta - Resume",
    author="Manu Gupta",
    subject="Software development internship resume",
)
doc.build(story)
