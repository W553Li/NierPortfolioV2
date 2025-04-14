import React, { useState } from 'react'
import PageTemplate from './PageTemplate'
import ButtonPanel from '../components/ButtonPanel'
import Panel from '../components/Panel'

export default function Experience() {
  const [activePanel, setActivePanel] = useState(null)
  
  const panelContent = {
    "Health and Rehab Research Inc": ["Role: Machine Learning Engineer",
      "Time: June 2023 - August 2023",
      "Location: Mississauga, Ontario"
    ].join('\n'),
    "Rogers Communications": ["Role: Network Engineer",
      "Time: September 2022 - December 2022",
      "Location: Brampton, Ontario"
    ].join('\n'),
    "Waterloo Experience Accelerate Program": ["Role: AI for Financial Services Project Team Member",
      "Time: January 2022 - April 2022",
      "Location: Waterloo, Ontario"
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
