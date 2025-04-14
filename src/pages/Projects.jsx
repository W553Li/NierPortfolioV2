import React, { useState } from 'react'
import PageTemplate from './PageTemplate'
import ButtonPanel from '../components/ButtonPanel'
import Panel from '../components/Panel'

export default function Projects() {
  const [activePanel, setActivePanel] = useState(null)
  const [activeButtonPanel, setActiveButtonPanel] = useState(null)
  
  const selections = {
    "Web Development": ["ASTunnel", "BudgetTracker", "ImageSearcher", "ToDoList", "Snake"],
    "Games": ["Candlelight"]
  }

  const panelContent = {
    "ASTunnel":       ["Languages and Frameworks: HTML, CSS, JavaScript, ReactJS, React Bootstrap, TensorFlowJS, ThreeJS", "",
                      "An interactive web game utilizing TensorFlowJS to capture gestures from the user's camera, specfically those resembling American Sign Langauge (ASL), to get points while travelling through a 3D tunnel built with ThreeJS."
    ].join('\n'),
    "BudgetTracker":  ["Languages and Frameworks: HTML, CSS, JavaScript, ReactJS, React Bootstrap, Supabase", "",
                      "A full stack budget tracker built with a React frontend and a Supabase backend. Features custom hooks to allow for full CRUD functionality, such as creating, updating, and removing budgets and expenses. Also features authentication using email, allowing for access to the your budgets across browsers and devices easily."
    ].join('\n'),
    "ImageSearcher":  ["Languages and Frameworks: HTML, CSS, JavaScript, Flask, Python, Bootstrap", "",
                      "A full stack image searcher similar to reverse image searching, allowing for the user to input links to images and receive similar images with data such as dimensions and creator through the use of various APIs. Features authentication using email."
    ].join('\n'),
    "ToDoList":       ["Languages and Frameworks: HTML, CSS, JavaScript, FireBase", "",
                      "A full stack ToDoList built with FireBase backend. Features custom hooks to allow for full CRUD functionality, such as creating and deleting ToDoList items."
    ].join('\n'),
    "Snake":          ["Languages and Frameworks: HTML, CSS, JavaScript", "",
                      "A web recreation of the popular Snake game with a few additions such as speed functions that work in real time to change the speed of the snake, player score, and various other controls."
    ].join('\n'),
    "Candlelight":    ["Languages and Frameworks: Java", "",
                      "A roguelike game developed using Java, in which the player explores and endless, randomized dungeon, featuring mechanics such as the randomizing of 10 different stages alongside enemies and items to allow for a unique play-through every single time. The enemies themselves have different stats such as there being faster, but weaker enemies whereas others are much slower but hit much harder. In addition, every 5 stages features 1 of 2 bosses, each with unique abilities and a real-time updating health bar and will also drop a powerful item upon defeat. The player has many different stats such as movement speed, physical and magic damage, and defense, all of which can be increased using the various items scattered around the stages."
    ].join('\n')
  }

  const handleSidebarClick = (buttonName) => {
    setActiveButtonPanel(buttonName)
  }

  const handleButtonPanelClick = (buttonName) => {
    setActivePanel(buttonName)
  }

  return (
    <>
      <PageTemplate 
        title="Projects"
        sidebars={activeButtonPanel ? [] : ["Web Development", "Games"]}
        onSidebarClick={handleSidebarClick}
        footer="The projects I've done"
        subtitle={activeButtonPanel ? " - " + activeButtonPanel : null}
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
