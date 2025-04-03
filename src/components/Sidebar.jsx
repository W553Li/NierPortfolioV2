import React from 'react';
import styled from 'styled-components';
import ButtonWithArrow from './ButtonWithArrow';
import colors from './colors.json';

const SidebarParent = styled.div`
  display: flex;
  flex-direction: row;
  // min-height: fit-content;
  position: relative;
  // padding-left: 1rem;
  left: 3.5%;
`

const BarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  position: absolute;
  top: 3rem;
  // left: 1rem;
  height: calc(100% - 3rem);
`

const SidebarItem = styled.div`
  background-color: ${colors.colors[2].hex};
  width: 16px;
  height: 100%;
  margin-right: 6px;

  &:nth-child(2){
    width: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  padding-top: 3rem;
  // width: 504px;
  width: 27%;
  // max-height: 50%;
  gap: 1rem;
  position: relative;
`


export default function Sidebar() {
  return (
    <SidebarParent>
      <BarsContainer>
        <SidebarItem />
        <SidebarItem />
      </BarsContainer>
      <ButtonContainer>
        <ButtonWithArrow>Button</ButtonWithArrow>
        <ButtonWithArrow>Button</ButtonWithArrow>
      </ButtonContainer>
    </SidebarParent>
  )
}
