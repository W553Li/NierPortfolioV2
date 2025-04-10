import React from 'react'
import styled from 'styled-components'
import colors from './colors.json'

const ButtonParent = styled.button`
  // background-color: ${colors.colors[2].hex};
  background-color: ${props => props.panel ? colors.colors[3].hex : colors.colors[2].hex};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  width: 100%;
  // height: 48px;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  gap: 1rem;
  // margin-left: 3rem;

  color: ${colors.colors[0].hex};
  border: none;
  outline: none;
  
  &:before, &:after {
    background-color: ${colors.colors[0].hex};
    transition: all 0.2s ease-in-out;
    visibility: hidden;
    content: '';
    position: absolute;

    left: 0;
    width: 100%;
    height: 2px;
  }

  &:before {
    top: 0px;
  }

  &:after {
    bottom: 0px;
  }

  &:hover {
    box-shadow: inset 100vh 0 0 0 ${colors.colors[0].hex};
    color: ${colors.colors[2].hex};
    
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
  background-color: ${colors.colors[0].hex};
  transition: all 0.2s ease-in-out;

  width: 24px;
  height: 24px;
  
  ${ButtonParent}:hover & {
    // background-color: ${colors.colors[2].hex};
    box-shadow: inset 100vh 0 0 0 ${colors.colors[3].hex};
  }
`

export default function Button({ panel, children }) {
  return (
    <ButtonParent panel={panel}>
      <ButtonChild />
      {children}
    </ButtonParent>
  )
}
