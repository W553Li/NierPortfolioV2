import React, { useState } from 'react'
import Panel from '../components/Panel'
import PageTemplate from './PageTemplate'

export default function About() {
  const [activePanel, setActivePanel] = useState(null)

  const panelContent = {
    "Me": [
      "Hello! I'm William Li, a Computer Engineering Student studying at the University of Waterloo. I have a particular interest in web development, AI and machine learning, having built various full-stack and AI projects, especially involving computer vision.",
      "",
      `Linkedin: <a href="https://www.linkedin.com/in/william553li" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/william553li</a>`,
      `Github: <a href="https://github.com/W553Li" target="_blank" rel="noopener noreferrer">https://github.com/W553Li</a>`,
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
      "Programming Languages: Python, C/C++, Java, JavaScript, HTML/CSS, PHP, MySQL, MATLAB", "",
      "Technologies: ",
        "• AI and Machine Learning: TensorFlow, Scikit-Learn, OpenCV",
        "• Web Development: Supabase, Firebase, Flask, ReactJS, Node.js, Bootstrap, Tailwind CSS",
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