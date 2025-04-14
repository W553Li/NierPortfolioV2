import React, { useState } from 'react'
import PageTemplate from './PageTemplate'
import ButtonPanel from '../components/ButtonPanel'
import Panel from '../components/Panel'

export default function Interests() {
  const [activePanel, setActivePanel] = useState(null)
  
  const panelContent = {
    "Art": ["Content about me goes here"].join('\n'),
    "Reading": ["List of skills goes here"].join('\n'),
    "Music": ["anana"].join('\n'),
  }

  const handleButtonClick = (buttonName) => {
    setActivePanel(buttonName)
  }

  return (
    <>
      <PageTemplate 
        title="Interests"
        sidebars={["Art", "Reading", "Music"]}
        onSidebarClick={handleButtonClick}
        footer="Some of my interests"
      ></PageTemplate>

      {/* <ButtonPanel buttons={["a", "b", "c", "d", "e", "f", "g", "h", "i", 'j', 'k', 'l', 'm', 'n', 'o', 'p']}></ButtonPanel> */}
      {/* <ButtonPanel buttons={buttonPanels}></ButtonPanel> */}

      {activePanel && (
        <Panel 
          title={activePanel}
          text={panelContent[activePanel]}
        />
      )}
    </>
  )
}
