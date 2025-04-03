import React from 'react';
import styled from 'styled-components';
import colors from './colors.json';

const FooterParent = styled.div`
    background-color: ${colors.colors[3].hex};
    position: fixed;
    display: flex;
    align-items: center;
    
    width: 92.5%;
    height: 4rem;
    left: 3.5%;
    bottom: 6rem;

    font-size: 1.75rem;
    
    box-shadow: 0.25rem 0.25rem 0px 0px ${colors.colors[1].hex};
`

const FooterItem = styled.div`
    background-color: ${colors.colors[0].hex};
    width: 16px;
    height: 100%;
    margin-right: 6px;

    &:nth-child(2){
        width: 5px;
    }
`;

const FooterContent = styled.div`
    margin-left: 1.5rem;
`

export default function Footer({ children }) {
    return (
        <FooterParent>
            <FooterItem/>
            <FooterItem/>
            <FooterContent>
                {children}
            </FooterContent>
        </FooterParent>
    )
}
