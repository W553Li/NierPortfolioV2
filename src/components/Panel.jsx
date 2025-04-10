import React, { useState } from 'react';
import styled from 'styled-components';
import colors from './colors.json';

// const PanelParent = styled.div`
//     background-color: ${colors.colors[2].hex};
//     display: flex;
//     position: relative;
//     // padding-left: 1rem;

//     width: 10rem;
//     height: 10rem;
//     left: 5%;
    
// `

const PanelLeft = styled.div`
    background-color: ${colors.colors[3].hex};
    position: fixed;
    z-index: -1;

    width: 27%;
    bottom: 14rem;
    top: 15rem;
    left: 3.5%;
    margin-left: 4rem
`

const PanelMiddle = styled.div`
    background-color: ${colors.colors[3].hex};
    position: fixed;
    z-index: -1;

    width: 27%;
    bottom: 14rem;
    top: 15rem;
    left: 38%;
`

const PanelRight = styled.div`
    background-color: ${colors.colors[3].hex};
    position: fixed;
    z-index: -1;

    width: 27%;
    bottom: 14rem;
    top: 15rem;
    right: 4%;
    // left: 70%;
`

const PanelLarge = styled.div`
    background-color: ${colors.colors[3].hex};
    position: fixed;
    z-index: -1;

    font-size: 1.2rem;
    color: ${colors.colors[0].hex};
    padding: 4rem 1rem 1rem 1rem;

    width: 58%;
    bottom: 14rem;
    top: 15rem;
    left: 38%;

    &:before {
        background-color: ${colors.colors[0].hex};
        content: attr(title);
        position: absolute;
        color: ${colors.colors[2].hex};
        font-size: 1.8rem;
        padding: 0.2rem 1rem;
        display: flex;
        align-items: center;

        top: 0;
        left: 0;
        width: calc(100% - 2rem);
        height: 2.5rem;
    }
`

export default function Panel({ title, text }) {
    const [left, setLeft] = useState(false)
    const [middle, setMiddle] = useState(false)
    const [right, setRight] = useState(false)

    return (
        <>
            {/* <PanelParent/> */}
            {/* <PanelLeft/> */}
            {/* <PanelMiddle/> */}
            {/* <PanelRight/> */}

            <PanelLarge title={title}>
                {text}
            </PanelLarge>
        </>
    )
}