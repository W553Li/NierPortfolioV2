import React from 'react'
import styled from 'styled-components'
import colors from './colors.json'

const ButtonParent = styled.button`
  background-color: ${colors.colours[2].hex};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  width: 10%;
  height: 100%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  color: ${colors.colors[0].hex};
  border: none;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 10%;
    transition: all 0.2s ease-in-out;
  }

  &:before {
    top: 0%;
    left: 0%;
    border-top: 5% solid ${colors.colors[1].hex};
    visibility: hidden;
  }

  &:after {
    bottom: 0%;
    left: 0%;
    border-bottom: 5% solid ${colors.colors[1].hex};
    visibility: hidden;
  }

  &:hover {
    background-color: ${colors.colors[1].hex};
    color: ${colors.colors[2].hex};
    
    &:before, &:after {
      visibility: visible;
    }

    &:before {
      transform: translate(0px, -100%);
    }
    &:after {
      transform: translate(0px, 100%);
    }

  }
`

const ButtonChild = styled.div`
  background-color: ${colors.colors[1].hex};
  transition: all 0.2s ease-in-out;

  width: 15%;
  height: 15%;
  margin: 5%;
  
  ${ButtonParent}:hover & {
    background-color: ${colors.colors[2].hex};
  }
`

export default function Button({ children }) {
  return (
    <ButtonParent>
      <ButtonChild />
      {/* {children} */}
      Button
    </ButtonParent>
  )
}
