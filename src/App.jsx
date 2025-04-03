import { useState } from 'react'
import Button from './components/Button'
import Sidebar from './components/Sidebar'
import Border from './components/Border'
import Title from './components/Title'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Panel from './components/Panel'
import PageTemplate from './pages/PageTemplate'

import About from './pages/About'

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

      <Border></Border>
      <Navbar></Navbar>
      
      <About></About>
    </>
  )
}

export default App
