import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from './colors.json';
import Modal from './Modal';

const PanelLarge = styled.div`
    background-color: ${colors.colors[3].hex};
    position: fixed;
    z-index: 0;
    overflow-y: hidden;
    overflow-x: hidden;

    font-size: 1.2rem;
    color: ${colors.colors[0].hex};
    padding: 4rem 1rem 1rem 1rem;

    width: 58%;
    bottom: 14rem;
    top: 15rem;
    left: 38%;

    display: flex;
    flex-direction: column;

    &:before {
        background-color: ${colors.colors[0].hex};
        content: attr(title);
        position: absolute;
        color: ${colors.colors[2].hex};
        font-size: 1.8rem;
        padding: 0.2rem 1rem;
        display: flex;
        align-items: center;

        top: 0;
        left: 0;
        width: calc(100% - 2rem);
        height: 2.5rem;
    }

    &::-webkit-scrollbar {
        display: visible;
        margin-top: 4rem;
        margin-bottom: 1.5rem;
        width: 0.25rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${colors.colors[1].hex};
        opacity: 0.5;
        border-radius: 0.125rem;
    }

    &::-webkit-scrollbar-track {
        margin-top: 4rem;
        margin-bottom: 1.5rem;
    }
`;

const PanelTop = styled.div`
    background-color: ${colors.colors[0].hex};
    position: relative;

    width: 98%;
    height: 0.125rem;
    margin-left: 0.5rem;
    margin-top: -0.5rem;
`;

const PanelBottom = styled.div`
    background-color: ${colors.colors[0].hex};
    position: relative;

    width: 98%;
    height: 0.125rem;
    margin-left: 0.5rem;
    margin-top: auto;
`;

const Dots = styled.div`
    background-color: ${colors.colors[0].hex};
    position: relative;
    
    left: 99.6%;
    top: -0.125rem;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
`;

const PanelText = styled.div`
    white-space: pre-wrap;
    line-height: 1.5;
    padding: 0 1rem;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        display: visible;
        width: 0.25rem;
        margin-right: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${colors.colors[1].hex};
        opacity: 0.5;
        border-radius: 0.125rem;
    }

    &::-webkit-scrollbar-track {
        margin-right: 1rem;
        margin-bottom: 0.25rem;
        margin-top: 0.25rem;
        background-color: transparent;
    }

    img {
        cursor: pointer;
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(1.05);
        }
    }
`;

export default function Panel({ title = "", text = ""}) {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const images = document.querySelectorAll('.panel-content img');
        images.forEach(img => {
            img.addEventListener('click', () => setSelectedImage(img.src));
        });

        return () => {
            images.forEach(img => {
                img.removeEventListener('click', () => setSelectedImage(img.src));
            });
        };
    }, [text, selectedImage]);

    return (
        <>
            <PanelLarge title={title}>
                <PanelTop/>
                <Dots/>
                <PanelText 
                    className="panel-content"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
                <PanelBottom/>
                <Dots/>
            </PanelLarge>

            {selectedImage && (
                <Modal 
                    imageUrl={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    );
}