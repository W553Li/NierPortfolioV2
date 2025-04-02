import React from 'react'
import styled from 'styled-components';
import colors from './colors.json';

const PanelParent = styled.div`
    background-color: ${colors.colors[2].hex};
    display: flex;
    position: relative;
    // padding-left: 1rem;

    width: 10rem;
    height: 10rem;
`


export default function Panel() {


    return (
        <PanelParent/>
    )
}