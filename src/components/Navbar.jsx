import React from 'react'
import styled from 'styled-components';
import ButtonWithArrow from './ButtonWithArrow';
import colors from './colors.json';

const NavbarParent = styled.div`
    display: flex;
    flex-direction: row;
    // min-height: fit-content;
    position: relative;

    // padding-left: 1rem;
    left: 3.5%;
    width: 92.5%;
`

const BarsContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    position: absolute;
    top: 2rem;
    // left: 1rem;
    height: calc(100% - 2rem);
`

const NavbarItem = styled.div`
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
    flex-direction: row;
    margin-left: 4rem;
    padding-top: 2rem;
    width: 100%;
    gap: 3rem;
    position: relative;

    // button widths
    > * {
        width: 100%;
    }
`

export default function Navbar() {
    return (
        <NavbarParent>
            <BarsContainer>
                <NavbarItem />
                <NavbarItem />
            </BarsContainer>
            <ButtonContainer>
                <ButtonWithArrow>About Me</ButtonWithArrow>
                <ButtonWithArrow>Experience</ButtonWithArrow>
                <ButtonWithArrow>Projects</ButtonWithArrow>
                <ButtonWithArrow>Interests</ButtonWithArrow>
            </ButtonContainer>
        </NavbarParent>
    )
}
