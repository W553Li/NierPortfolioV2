import React from 'react'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'
import Border from '../components/Border'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Panel from '../components/Panel'
import styled from 'styled-components';
import ButtonPanel from '../components/ButtonPanel';

export default function PageTemplate({title = "", subtitle = "", sidebars = [], onSidebarClick, footer = ""}) {

    return (
        <>
            <Title Title={title} Subtitle={subtitle} />
            <Sidebar buttons={sidebars} onButtonClick={onSidebarClick}></Sidebar>
            <Footer children={footer}></Footer>
        </>
    )
}