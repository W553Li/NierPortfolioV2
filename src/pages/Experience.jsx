import React, { useState } from 'react'
import PageTemplate from './PageTemplate'
import ButtonPanel from '../components/ButtonPanel'
import Panel from '../components/Panel'

export default function Experience() {
  const [activePanel, setActivePanel] = useState(null)
  
  const panelContent = {
    "Health and Rehab Research Inc": "Content about me goes here",
    "Rogers Communications": "List of skills goes here",
    "Waterloo Experience Accelerate Program": "ababa"
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
