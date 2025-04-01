import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Button from './components/Button'
import Sidebar from './components/Sidebar'
import Border from './components/Border'
import Title from './components/Title'
import GlobalStyles from './styles/GlobalStyles'

function App() {

  return (
    <>
      {/* <Sidebar></Sidebar> */}
      {/* <Border></Border> */}
      <GlobalStyles />
      <Title Title="Title" Subtitle="Subtitle" />
    </>
  )
}

export default App
