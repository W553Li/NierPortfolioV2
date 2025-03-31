import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import colors from './colors.json'

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const Arrow = styled.div`
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom: 12px solid ${colors.colors[0].hex};
    position: relative;
    rotate: 270deg;
    right: 44px;
    transition: all 0.4s ease;
    opacity: 0;

    &:after {
        content: '';
        position: absolute;
        left: -6px;
        top: 12px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
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