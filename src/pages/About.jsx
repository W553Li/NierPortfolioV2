import React, { useState } from 'react'
import PageTemplate from './PageTemplate'
import ButtonPanel from '../components/ButtonPanel'
import Panel from '../components/Panel'

export default function About() {
  const [activePanel, setActivePanel] = useState(null)

  const panelContent = {
    "Me": "Content about me goes here",
    "Skills": "List of skills goes here"
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