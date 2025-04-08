import React, {useState} from 'react'
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

    width: 58%;
    bottom: 14rem;
    top: 15rem;
    left: 38%;

    &:before {
        background-color: ${colors.colors[0].hex};
        content: '';
        position: absolute;

        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
    }
`


export default function Panel(children) {
    const [left, setLeft] = useState(false)
    const [middle, setMiddle] = useState(false)
    const [right, setRight] = useState(false)

    return (
        <>
            {/* <PanelParent/> */}
            <PanelLeft/>
            {/* <PanelMiddle/> */}
            {/* <PanelRight/> */}

            <PanelLarge/>
        </>
    )
}