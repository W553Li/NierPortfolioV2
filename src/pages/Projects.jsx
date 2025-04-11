import React, { useState } from 'react'
import PageTemplate from './PageTemplate'
import ButtonPanel from '../components/ButtonPanel'
import Panel from '../components/Panel'

export default function Projects() {
  const [activePanel, setActivePanel] = useState(null)
  const [activeButtonPanel, setActiveButtonPanel] = useState(null)
  
  const selections = {
    "Web Development": ["ASTunnel", "BudgetTracker"],
    "Games": ["Candlelight"]
  }

  const panelContent = {
    "ASTunnel": "Content about me goes here",
    "BudgetTracker": "List of skills goes here",
    "Candlelight": "Ungabunga"
  }

  const handleSidebarClick = (buttonName) => {
    setActiveButtonPanel(buttonName)
  }

  const handleButtonPanelClick = (buttonName) => {
    console.log(buttonName)
    setActivePanel(buttonName)
  }

  return (
    <>
      <PageTemplate 
        title="Projects"
        sidebars={activeButtonPanel ? [] : ["Web Development", "Games"]}
        onSidebarClick={handleSidebarClick}
        footer="The projects I've done"
      ></PageTemplate>

      {activeButtonPanel && (
        <ButtonPanel buttons={selections[activeButtonPanel]} onButtonClick={handleButtonPanelClick}></ButtonPanel>
      )}

      {/* {activeButtonPanel ? (
        <ButtonPanel buttons={selections[activeButtonPanel]}></ButtonPanel>
      ):(
        <PageTemplate 
          title="Projects"
          sidebars={["Web Development", "Games"]}
          onSidebarClick={handleSidebarClick}
        ></PageTemplate>
      )} */}

      {activePanel && (
        <Panel 
          title={activePanel}
          text={panelContent[activePanel]}
        />
      )}
    </>
  )
}
