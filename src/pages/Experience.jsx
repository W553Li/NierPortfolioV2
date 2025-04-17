import React, { useState } from 'react'
import PageTemplate from './PageTemplate'
import ButtonPanel from '../components/ButtonPanel'
import Panel from '../components/Panel'

export default function Experience() {
  const [activePanel, setActivePanel] = useState(null)
  
  const panelContent = {
    "Health and Rehab Research Inc": ["Role: Machine Learning Engineer",
      "Time: June 2023 - August 2023",
      "Location: Mississauga, Ontario",
      "",
      "• Engineered a real-time Python application that tracks 33 body landmarks and predicts 4 additional points, now in active use by four health teams to enhance physical therapy accuracy.",
      "• Developed a user-friendly Tkinter GUI and integrated an emotion prediction model, enabling dual-tracking of physical movement and emotional state during rehabilitation sessions.",
      "• Designed and trained a neural network achieving 85% accuracy in emotion recognition from movement data, supporting innovative diagnostic approaches for chronic lower back pain.",

    ].join('\n'),
    "Rogers Communications": ["Role: Network Engineer",
      "Time: September 2022 - December 2022",
      "Location: Brampton, Ontario",
      "",
      "• Automated the monthly reporting of KPIs using Python, slashing manual effort by 95% and streamlining performance monitoring.",
      "• Built a PHP-based web interface that empowered 15 core engineering teams to export and process their own data, increasing autonomy and efficiency.",
      "• Explored Jira Cloud automation via Groovy scripting to integrate Python-based workflows, enhancing task tracking and reducing routine overhead.",
    ].join('\n'),
    "Waterloo Experience Accelerate Program": ["Role: AI for Financial Services Project Team Member (Microsoft – Azure & AI Fundamentals)",
      "Time: January 2022 - April 2022",
      "Location: Waterloo, Ontario",
      "",
      "• Spearheaded privacy and security protocols for a team of five in building an AI-powered financial service, under the guidance of RBC mentors.",
      "• Developed a personalized investment advisory tool using Microsoft Azure Machine Learning and MS SQL, aimed at improving financial accessibility.",
      "• Created a prototype financial chatbot with Azure QnA Maker, trained on curated knowledge bases provided by industry experts.",
    ].join('\n')
  }

  const handleButtonClick = (buttonName) => {
    setActivePanel(buttonName)
  }

  return (
    <>
      <PageTemplate 
        title="Experience"
        sidebars={["Health and Rehab Research Inc", "Rogers Communications", "Waterloo Experience Accelerate Program"]}
        onSidebarClick={handleButtonClick}
        footer="My work experience"
      ></PageTemplate>

      {activePanel && (
        <Panel 
          title={activePanel}
          text={panelContent[activePanel]}
        />
      )}
    </>
  )
}
