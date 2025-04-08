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

export default function PageTemplate() {

    return (
        <>
            <Title Title="Title" Subtitle="Subtitle" />
            {/* <Title></Title> */}

            {/* <Sidebar></Sidebar> */}

            {/* <Panel></Panel> */}
            {/* <Panel></Panel> */}

            <ButtonPanel buttons={["a", "b", "c", "d", "e", "f", "g", "h", "i", 'j', 'k', 'l', 'm', 'n', 'o', 'p']}></ButtonPanel>

            <Footer></Footer>
        </>
    )
}