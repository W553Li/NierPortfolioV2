import React, { useState } from 'react'
import Panel from '../components/Panel'
import PageTemplate from './PageTemplate'

export default function About() {
  const [activePanel, setActivePanel] = useState(null)

  const panelContent = {
    "Me": [
      // "Hello! I'm William Li, a Computer Engineering Student studying at the University of Waterloo. I have a particular interest in web development, AI and machine learning, having built various full-stack and AI projects, especially involving computer vision.",
      "Hi! I'm William Li, a Computer Engineering student at the University of Waterloo with a passion for web development, artificial intelligence, and machine learning. I enjoy bringing ideas to life through full-stack applications and intelligent systems—particularly in the realm of computer vision.",
      "",
      `Email: <a href="mailto:w553li@uwaterloo.ca">w553li@uwaterloo.ca</a>`,
      `Linkedin: <a href="https://www.linkedin.com/in/william553li" target="_blank" rel="noopener noreferrer">linkedin.com/in/william553li</a>`,
      `Github: <a href="https://github.com/W553Li" target="_blank" rel="noopener noreferrer">github.com/W553Li</a>`,
      // `Resume: <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>`
    ].join('\n'),
    "Skills": [
      // "Web Development: HTML, CSS, JavaScript, React, PHP",
      // "Programming Languages:",
      // "• Python",
      // "• C/C++",
      // "• HTML",
      // "• CSS",
      // "• JavaScript",
      // "• PHP",
      // "• MySQL",
      // "• MATLAB",
      // "",
      // "Frameworks & Tools:",
      // "• React",
      // "• Node.js",
      // "• Git"
      // "Programming Languages: Python, C/C++, Java, JavaScript, HTML, CSS, PHP, MySQL, MATLAB", "",
      `Programming Languages: <img src="/icons/icons8-python-20.svg"/> Python, <img src="/icons/icons8-c++.svg"/> C/C++, <img src="/icons/icons8-java.svg"/> Java, <img src="/icons/icons8-javascript.svg"/> JavaScript, <img src="/icons/icons8-html.svg"/> HTML, <img src="/icons/icons8-css.svg"/> CSS, <img src="/icons/icons8-php.svg"/> PHP, <img src="/icons/icons8-mysql.svg"/> MySQL, <img src="/icons/icons8-matlab.svg"/> MATLAB`, "",
      "Technologies: ",
        "• AI and Machine Learning: TensorFlow, Scikit-Learn, OpenCV",
        "• Web Development: Supabase, Firebase, Vite, Flask, ReactJS, Node.js, Bootstrap, Tailwind CSS",
        "",
      "Developer Tools: Git, Jira, MS Azure, MS PowerBI, VS Code, Intellij IDEA, PhpStorm, MySQL Workbench", "",
      "Certifications: Microsoft Azure Fundamentals, Microsoft Azure AI Fundamentals"
    ].join('\n')
  }

  const handleButtonClick = (buttonName) => {
    setActivePanel(buttonName)
  }

  return (
    <>
      <PageTemplate 
        title="About Me"
        sidebars={["Me", "Skills"]}
        onSidebarClick={handleButtonClick}
        footer="About Me"
      />

      {activePanel && (
        <Panel 
          title={activePanel}
          text={panelContent[activePanel]}
        />
      )}
    </>
  )
}