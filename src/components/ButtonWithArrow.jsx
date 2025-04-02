import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import colors from './colors.json'

// TODO: add active effect to button and arrow


const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    // width: fit-content;
`

const Arrow = styled.div`
    // left side of arrow
    transition: all 0.4s ease;
    opacity: 0;
    // position: relative;
    position: absolute;
    pointer-events: none;

    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom: 12px solid ${colors.colors[0].hex};
    rotate: 270deg;
    left: -5rem;

    // little box things
    &:before {
        content: '';
        position: absolute;
        z-index: 1;

        width: 4px;
        height: 0px;
        left: -2px;
        top: 10px;
        border-bottom: 4px solid ${colors.colors[3].hex};

        box-shadow: 8px 22px 0px 0px ${colors.colors[0].hex},
        -8px 22px 0px 0px ${colors.colors[0].hex};
    }

    // right side of arrow
    &:after {
        content: '';
        position: absolute;
        left: -8px;
        top: 12px;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-top: 24px solid ${colors.colors[0].hex};
    }

    ${Container}:hover & {
        opacity: 1;
    }
`

export default function ButtonWithArrow({ children }) {
    return (
        <Container>
            <Arrow />
            <Button>{children}</Button>
        </Container>
    )
}