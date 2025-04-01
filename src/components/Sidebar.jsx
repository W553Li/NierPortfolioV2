import React from 'react';
import styled from 'styled-components';
import ButtonWithArrow from './ButtonWithArrow';
import colors from './colors.json';

const SidebarParent = styled.div`
  display: flex;
  // flex-direction: row;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding-left: 1rem;
`

const BarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
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
  margin-left: 1rem;
  padding-top: 2rem;
  width: 504px;
  gap: 1rem;
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
