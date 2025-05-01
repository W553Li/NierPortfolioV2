import React, { useEffect, useState } from 'react'
import ButtonPanel from '../components/ButtonPanel'
import Panel from '../components/Panel'
import PageTemplate from './PageTemplate'

export default function About() {
  const [activePanel, setActivePanel] = useState(null)
  const [activeButtonPanel, setActiveButtonPanel] = useState(null)

  const selections = {
    // "Web Development": ["ASTunnel", "BudgetTracker", "ImageSearcher", "ToDoList", "Snake"],
    // "Games": ["Candlelight"]
    "Skills": ["Programming Languages", "Technologies", "Developer Tools", "Certifications"],
  }

  const panelContent = {
    "Me": [
      // "Hello! I'm William Li, a Computer Engineering Student studying at the University of Waterloo. I have a particular interest in web development, AI and machine learning, having built various full-stack and AI projects, especially involving computer vision.",
      `<img src="/NierPortfolioV2/images/PFP.jpg" style="max-width: 600px;"/>`, 
      "Hi! I'm William Li, a Computer Engineering student at the University of Waterloo with a passion for web development, artificial intelligence, and machine learning. I enjoy bringing ideas to life through full-stack applications and intelligent systems—particularly in the realm of computer vision.",
      "",
      `Email: <a href="mailto:w553li@uwaterloo.ca">w553li@uwaterloo.ca</a>`,
      `Linkedin: <a href="https://www.linkedin.com/in/william553li" target="_blank" rel="noopener noreferrer">linkedin.com/in/william553li</a>`,
      `Github: <a href="https://github.com/W553Li" target="_blank" rel="noopener noreferrer">github.com/W553Li</a>`,
      `Resume: <a href="/NierPortfolioV2/William_Li_Software_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>`
    ].join('\n'),
    "Programming Languages": [
      `• <img src="/NierPortfolioV2/icons/python.svg" style="max-width: 20px;"/> Python`, 
      `• <img src="/NierPortfolioV2/icons/c++.svg" style="max-width: 20px;"/> C/C++`, 
      `• <img src="/NierPortfolioV2/icons/java.svg" style="max-width: 20px;"/> Java`, 
      `• <img src="/NierPortfolioV2/icons/javascript.svg" style="max-width: 20px;"/> JavaScript`, 
      `• <img src="/NierPortfolioV2/icons/html.svg" style="max-width: 20px;"/> HTML`, 
      `• <img src="/NierPortfolioV2/icons/css.svg" style="max-width: 20px;"/> CSS`, 
      `• <img src="/NierPortfolioV2/icons/php.svg" style="max-width: 20px;"/> PHP`, 
      `• <img src="/NierPortfolioV2/icons/mysql.svg" style="max-width: 20px;"/> MySQL`, 
      `• <img src="/NierPortfolioV2/icons/matlab.svg" style="max-width: 20px;"/> MATLAB`,
    ].join('\n'),
    "Technologies": [
      `AI and Machine Learning:`, 
        `• <img src="/NierPortfolioV2/icons/Keras.svg" style="max-width: 20px;"/> Keras`, 
        `• <img src="/NierPortfolioV2/icons/tensorflow.svg" style="max-width: 20px;"/> TensorFlow`, 
        `• <img src="/NierPortfolioV2/icons/scikit-learn.svg" style="max-width: 20px;"/> Scikit-Learn`, 
        `• <img src="/NierPortfolioV2/icons/OpenCV.svg" style="max-width: 20px;"/> OpenCV`,
      "",
      `Web Development:`, 
        `• <img src="/NierPortfolioV2/icons/supabase.svg" style="max-width: 20px;"/> Supabase`, 
        `• <img src="/NierPortfolioV2/icons/Firebase.svg" style="max-width: 20px;"/> Firebase`, 
        `• <img src="/NierPortfolioV2/icons/Vite.svg" style="max-width: 20px;"/> Vite`, 
        `• <img src="/NierPortfolioV2/icons/Flask.svg" style="max-width: 20px;"/> Flask`, 
        `• <img src="/NierPortfolioV2/icons/React.svg" style="max-width: 20px;"/> ReactJS`, 
        `• <img src="/NierPortfolioV2/icons/Node.svg" style="max-width: 20px;"/> Node.js`, 
        `• <img src="/NierPortfolioV2/icons/Bootstrap.svg" style="max-width: 20px;"/> Bootstrap`, 
        `• <img src="/NierPortfolioV2/icons/Tailwind.svg" style="max-width: 20px;"/> Tailwind CSS`, 
        `• <img src="/NierPortfolioV2/icons/Threejs.svg" style="max-width: 20px;"/> ThreeJS`,
      "",
      `Data and Automation:`, 
        `• <img src="/NierPortfolioV2/icons/NumPy.svg" style="max-width: 20px;"/> Numpy`, 
        `• <img src="/NierPortfolioV2/icons/Pandas.svg" style="max-width: 20px;"/> Pandas`, 
        `• <img src="/NierPortfolioV2/icons/beautifulsoup.svg" style="max-width: 20px;"/> BeautifulSoup`, 
        `• <img src="/NierPortfolioV2/icons/Selenium.svg" style="max-width: 20px;"/> Selenium`,
      "",
    ].join('\n'),
    "Developer Tools": [
      `• <img src="/NierPortfolioV2/icons/GitHub.svg" style="max-width: 20px;"/> Git`, 
      `• <img src="/NierPortfolioV2/icons/Jira.svg" style="max-width: 20px;"/> Jira`, 
      `• <img src="/NierPortfolioV2/icons/Azure.svg" style="max-width: 20px;"/> MS Azure`, 
      `• <img src="/NierPortfolioV2/icons/powerbi.svg" style="max-width: 20px;"/> MS PowerBI`, 
      `• <img src="/NierPortfolioV2/icons/vscode.svg" style="max-width: 20px;"/> VS Code`, 
      `• <img src="/NierPortfolioV2/icons/IntelliJ.svg" style="max-width: 20px;"/> Intellij IDEA`, 
      `• <img src="/NierPortfolioV2/icons/PhpStorm.svg" style="max-width: 20px;"/> PhpStorm`, 
      `• <img src="/NierPortfolioV2/icons/mysql.svg" style="max-width: 20px;"/> MySQL Workbench`,
    ].join('\n'),
    "Certifications": [
      // "Microsoft Azure Fundamentals, Microsoft Azure AI Fundamentals"
      `• <img src="/NierPortfolioV2/icons/Azure.svg" style="max-width: 20px;"/> <a href="https://www.credly.com/badges/01c5fcec-294c-4f59-bc54-454277ef7a21" target="_blank" rel="noopener noreferrer">Microsoft Azure Fundamentals</a>`,
      `• <img src="/NierPortfolioV2/icons/Azure.svg" style="max-width: 20px;"/> <a href="https://www.credly.com/badges/365eb03d-10e2-4b0f-8d5f-9ef6432b4c89" target="_blank" rel="noopener noreferrer">Microsoft Azure AI Fundamentals</a>`,
    ].join('\n'),

    // "Skills": [
    //   "Programming Languages: ",
    //   `<img src="/NierPortfolioV2/icons/python.svg" style="max-width: 20px;"/> Python, <img src="/NierPortfolioV2/icons/c++.svg" style="max-width: 20px;"/> C/C++, <img src="/NierPortfolioV2/icons/java.svg" style="max-width: 20px;"/> Java, <img src="/NierPortfolioV2/icons/javascript.svg" style="max-width: 20px;"/> JavaScript, <img src="/NierPortfolioV2/icons/html.svg" style="max-width: 20px;"/> HTML, <img src="/NierPortfolioV2/icons/css.svg" style="max-width: 20px;"/> CSS, <img src="/NierPortfolioV2/icons/php.svg" style="max-width: 20px;"/> PHP, <img src="/NierPortfolioV2/icons/mysql.svg" style="max-width: 20px;"/> MySQL, <img src="/NierPortfolioV2/icons/matlab.svg" style="max-width: 20px;"/> MATLAB`, "",
    //   "Technologies: ",
    //     `• AI and Machine Learning: <img src="/NierPortfolioV2/icons/Keras.svg" style="max-width: 20px;"/> Keras, <img src="/NierPortfolioV2/icons/tensorflow.svg" style="max-width: 20px;"/> TensorFlow, <img src="/NierPortfolioV2/icons/scikit-learn.svg" style="max-width: 20px;"/> Scikit-Learn, <img src="/NierPortfolioV2/icons/OpenCV.svg" style="max-width: 20px;"/> OpenCV`,
    //     `• Web Development: <img src="/NierPortfolioV2/icons/supabase.svg" style="max-width: 20px;"/> Supabase, <img src="/NierPortfolioV2/icons/Firebase.svg" style="max-width: 20px;"/> Firebase, <img src="/NierPortfolioV2/icons/Vite.svg" style="max-width: 20px;"/> Vite, <img src="/NierPortfolioV2/icons/Flask.svg" style="max-width: 20px;"/> Flask, <img src="/NierPortfolioV2/icons/React.svg" style="max-width: 20px;"/> ReactJS, <img src="/NierPortfolioV2/icons/Node.svg" style="max-width: 20px;"/> Node.js, <img src="/NierPortfolioV2/icons/Bootstrap.svg" style="max-width: 20px;"/> Bootstrap, <img src="/NierPortfolioV2/icons/Tailwind.svg" style="max-width: 20px;"/> Tailwind CSS, <img src="/NierPortfolioV2/icons/Threejs.svg" style="max-width: 20px;"/> ThreeJS`,
    //     `• Data and Automation: <img src="/NierPortfolioV2/icons/NumPy.svg" style="max-width: 20px;"/> Numpy, <img src="/NierPortfolioV2/icons/Pandas.svg" style="max-width: 20px;"/> Pandas, <img src="/NierPortfolioV2/icons/beautifulsoup.svg" style="max-width: 20px;"/> BeautifulSoup, <img src="/NierPortfolioV2/icons/Selenium.svg" style="max-width: 20px;"/> Selenium`,
    //     "",
    //   "Developer Tools: ",
    //   `<img src="/NierPortfolioV2/icons/GitHub.svg" style="max-width: 20px;"/> Git, <img src="/NierPortfolioV2/icons/Jira.svg" style="max-width: 20px;"/> Jira, <img src="/NierPortfolioV2/icons/Azure.svg" style="max-width: 20px;"/> MS Azure, <img src="/NierPortfolioV2/icons/powerbi.svg" style="max-width: 20px;"/> MS PowerBI, <img src="/NierPortfolioV2/icons/vscode.svg" style="max-width: 20px;"/> VS Code, <img src="/NierPortfolioV2/icons/IntelliJ.svg" style="max-width: 20px;"/> Intellij IDEA, <img src="/NierPortfolioV2/icons/PhpStorm.svg" style="max-width: 20px;"/> PhpStorm, <img src="/NierPortfolioV2/icons/mysql.svg" style="max-width: 20px;"/> MySQL Workbench`, "",
    //   "Certifications: ",
    //   "Microsoft Azure Fundamentals, Microsoft Azure AI Fundamentals"
    // ].join('\n'),
  }

  // const handleButtonClick = (buttonName) => {
  //   setActivePanel(buttonName)
  // }

  const handleSidebarClick = (buttonName) => {
    if (buttonName === "Skills") {
      setActivePanel(null)
      setActiveButtonPanel(buttonName)
    } else {
      setActiveButtonPanel(null)
      setActivePanel(buttonName)
    }
  }

  const handleButtonPanelClick = (buttonName) => {
    setActivePanel(buttonName)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        if (activePanel) {
          setActivePanel(null);
        } else if (activeButtonPanel) {
          setActiveButtonPanel(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [activePanel, activeButtonPanel]);

  return (
    <>
      {/* <PageTemplate 
        title="About Me"
        sidebars={["Me", "Skills"]}
        onSidebarClick={handleButtonClick}
        footer="About Me"
      /> */}

      <PageTemplate 
        title="About Me"
        sidebars={activeButtonPanel ? [] : ["Me", "Skills"]}
        onSidebarClick={handleSidebarClick}
        footer="About Me"
        subtitle={activeButtonPanel ? " - " + activeButtonPanel : null}
      ></PageTemplate>

      {activeButtonPanel && (
        <ButtonPanel buttons={selections[activeButtonPanel]} onButtonClick={handleButtonPanelClick}></ButtonPanel>
      )}

      {activePanel && (
        <Panel 
          title={activePanel}
          text={panelContent[activePanel]}
        />
      )}
    </>
  )
}