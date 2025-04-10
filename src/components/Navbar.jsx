import React from 'react';
import styled from 'styled-components';
import NavBarButton from './NavBarButton';
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
    // height: calc(100% - 2rem);
    height: 2.5rem;
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
    gap: 2rem;
    position: relative;

    // button widths
    > * {
        width: 100%;
        // opacity: ${props => props.selected ? 1 : 0.5};
    }
`

export default function Navbar({ activePage, setActivePage }) {
    const handleSelect = (buttonName) => {
        if (buttonName !== activePage) {
            setActivePage(buttonName);
        }
    };

    return (
        <NavbarParent>
            <BarsContainer>
                <NavbarItem />
                <NavbarItem />
            </BarsContainer>
            <ButtonContainer role="radiogroup" aria-label="Navigation">
                <NavBarButton 
                    isActive={activePage === "About Me"}
                    onClick={() => handleSelect("About Me")}
                >
                    About Me
                </NavBarButton>
                <NavBarButton 
                    isActive={activePage === "Experience"}
                    onClick={() => handleSelect("Experience")}
                >
                    Experience
                </NavBarButton>
                <NavBarButton 
                    isActive={activePage === "Projects"}
                    onClick={() => handleSelect("Projects")}
                >
                    Projects
                </NavBarButton>
                <NavBarButton 
                    isActive={activePage === "Interests"}
                    onClick={() => handleSelect("Interests")}
                >
                    Interests
                </NavBarButton>
            </ButtonContainer>
        </NavbarParent>
    )
}
