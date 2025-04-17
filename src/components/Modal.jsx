import React from 'react';
import styled from 'styled-components';
import colors from './colors.json';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
`;

const ModalImage = styled.img`
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
`;

export default function Modal({ imageUrl, onClose }) {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalImage src={imageUrl} alt="Enlarged view" />
        </ModalOverlay>
    );
}