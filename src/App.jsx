import { useState } from 'react'
import Border from './components/Border'
import Navbar from './components/Navbar'

import About from './pages/About'
import Experience from './pages/Experience'
import Interests from './pages/Interests'
import Projects from './pages/Projects'

import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

const SidebarContainer = styled.div`
  display: flex;
`

function App() {
  const [activePage, setActivePage] = useState("About Me");

  // render the active page
  const renderPage = () => {
    switch(activePage) {
      case "About Me":
        return <About />;
      case "Experience":
        return <Experience />;
      case "Projects":
        return <Projects />;
      case "Interests":
        return <Interests />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <GlobalStyles />
      <Border />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
    </>
  )
}

export default App
