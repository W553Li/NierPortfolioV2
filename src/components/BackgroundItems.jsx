import React from 'react'
import styled from 'styled-components';
import colors from '../components/colors.json';

const BackgroundCircleLeft = styled.div`
    border: 2px solid ${colors.colors[2].hex};
    position: absolute;
    border-radius: 50%;
    z-index: -1;

    height: 60rem;
    width: 60rem;

    left: -30rem;
    bottom: 30rem;

    // box-shadow: 
    //     -10rem -10rem 0 2px ${colors.colors[1].hex},
    //     -10rem -10rem 0 0 transparent;
`

const BackgroundCircleLeftInner = styled.div`
    border: 2px solid ${colors.colors[2].hex};
    position: absolute;
    border-radius: 50%;
    z-index: -1;

    height: 60rem;
    width: 60rem;

    left: -30.5rem;
    bottom: 30.5rem;
`

const BackgroundCircleRight = styled.div`
    border: 2px solid ${colors.colors[2].hex};
    position: absolute;
    border-radius: 50%;
    z-index: -1;

    height: 60rem;
    width: 60rem;

    right: -30rem;
    top: 30rem;
`

const BackgroundCircleRightInner = styled.div`
    border: 2px solid ${colors.colors[2].hex};
    position: absolute;
    border-radius: 50%;
    z-index: -1;

    height: 60rem;
    width: 60rem;

    right: -30.5rem;
    top: 30.5rem;
`

const BackgroundLineLeft = styled.div`
	background-color: ${colors.colors[2].hex};
	position: absolute;
	z-index: -1;    
	rotate: 45deg;
	
	width: 91rem;
	top: 26.25rem;
    left: -19.25rem;
	height: 2px;

	box-shadow: -6rem 4rem 0 0 ${colors.colors[2].hex},
		-6rem -4rem 0 0 ${colors.colors[2].hex};
`

const BackgroundLineRight = styled.div`
	background: ${colors.colors[2].hex};
	position: absolute;
	z-index: -1;    
	rotate: 45deg;
	
	width: 91rem;
	bottom: 26.25rem;
    right: -19.25rem;
	height: 2px;

	box-shadow: 6rem 4rem 0 0 ${colors.colors[2].hex},
		6rem -4rem 0 0 ${colors.colors[2].hex};
`


export default function BackgroundItems() {

	return (
		<>
			<BackgroundCircleLeft/>
			<BackgroundCircleLeftInner/>
			<BackgroundCircleRight/>
			<BackgroundCircleRightInner/>
			<BackgroundLineLeft/>
			<BackgroundLineRight/>
		</>
	)
}