import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Button from './components/Button'
import Sidebar from './components/Sidebar'
import Border from './components/Border'
import Title from './components/Title'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Panel from './components/Panel'
import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
`

function App() {

  return (
    <>
      <GlobalStyles />

      {/* <SidebarContainer>
        <Sidebar></Sidebar>
        <Sidebar></Sidebar>
      </SidebarContainer> */}

      <Sidebar></Sidebar>

      {/* <Border></Border> */}

      {/* <Title Title="Title" Subtitle="Subtitle" /> */}

      {/* <Footer children="Hi"></Footer> */}

      <Navbar></Navbar>

      <Panel></Panel>
    </>
  )
}

export default App
