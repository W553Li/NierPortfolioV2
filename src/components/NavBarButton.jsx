import React from 'react'
import styled from 'styled-components'
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
    // transition: all 0.4s ease;
    opacity: 0;
    // position: relative;
    position: absolute;
    pointer-events: none;

    width: 0;
    height: 0;
    border: 8px solid transparent;
    // border-bottom: 12px solid ${colors.colors[0].hex};
    border-bottom: 12px solid ${props => props.isActive ? colors.colors[3].hex : colors.colors[0].hex};
    rotate: 270deg;
    left: -3rem;
    top: 0.75rem;

    // little box things
    &:before {
        content: '';
        position: absolute;
        z-index: 1;

        width: 4px;
        height: 0px;
        left: -2px;
        top: 10px;
        // border-bottom: 4px solid ${colors.colors[3].hex};
        border-bottom: 4px solid ${props => props.isActive ? colors.colors[1].hex : colors.colors[3].hex};

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
        // border-top: 24px solid ${colors.colors[0].hex};
        border-top: 24px solid ${props => props.isActive ? colors.colors[3].hex : colors.colors[0].hex};
    }

    ${Container}:hover & {
      opacity: 1;
    }

    opacity: ${props => props.isActive ? 1 : 0};
`

const ButtonParent = styled.button`
  // background-color: ${colors.colors[2].hex};
  background-color: ${props => props.isActive ? colors.colors[0].hex : colors.colors[2].hex};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  // transition: all 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  transition: bottom 0.2s;
  // transition: height 0.2s;

  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  gap: 1rem;

  // color: ${colors.colors[0].hex};
  color: ${props => props.isActive ? colors.colors[3].hex : colors.colors[0].hex};
  border: none;
  outline: none;

  height: ${props => props.isActive ? "4rem" : "2.5rem"};
  padding-bottom: ${props => props.isActive ? "1.5rem" : "0.5"};
  bottom: ${props => props.isActive ? "0rem" : "0.75rem"};
  
  &:before, &:after {
    background-color: ${colors.colors[1].hex};
    transition: all 0.2s ease-in-out;
    visibility: hidden;
    content: '';
    position: absolute;

    left: 0;
    width: 100%;
    height: 2px;

    opacity: ${props => props.isActive ? 0 : 1};
  }

  &:before {
    top: 0px;
  }

  &:after {
    bottom: 0px;
  }
  
  &:hover {
    opacity: 1;
    box-shadow: inset 100vh 0 0 0 ${colors.colors[0].hex};
    color: ${colors.colors[3].hex};
    
    &:before, &:after {
      visibility: visible;
    }

    &:before {
      transform: translateY(-6px);
    }
    
    &:after {
      transform: translateY(6px);
    }
  }
`

const ButtonChild = styled.div`
  // background-color: ${colors.colors[0].hex};
  background-color: ${props => props.isActive ? colors.colors[3].hex : colors.colors[0].hex};
  transition: all 0.2s ease-in-out;

  width: 24px;
  height: 24px;
  
  ${ButtonParent}:hover & {
    // background-color: ${colors.colors[2].hex};
    box-shadow: inset 100vh 0 0 0 ${colors.colors[3].hex};
  }
`

export default function NavBarButton({ children, isActive, onClick }) {
    return (
        <Container>
            <Arrow isActive={isActive}/>
            <ButtonParent
                role="radio"
                // aria-checked={isActive}
                isActive={isActive}
                onClick={onClick}
                // tabIndex={isActive ? 0 : -1}
                // onKeyDown={(e) => {
                //     if (e.key === ' ' || e.key === 'Enter') {
                //         onClick();
                //     }
                // }}
            >
                <ButtonChild isActive={isActive}/>
                {children}
            </ButtonParent>
        </Container>
    )
}