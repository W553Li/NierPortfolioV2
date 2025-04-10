import React from 'react';
import styled from 'styled-components';
import colors from './colors.json';
import ShuffleText from '../hooks/ShuffleText';

const TitleParent = styled.div`
  color: ${colors.colors[0].hex};
  letter-spacing: 8px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  text-shadow: 0.4rem 0.4rem #00000030;
  position: relative;

  left: 3.5%;
  margin-top: 2rem;
  // margin-bottom: 4rem;

  h1{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 48px;
  }

  h3{
    text-shadow: 0.4rem 0.4rem #00000000;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    letter-spacing: 0px;
    font-size: 24px;
  }
`

export default function Title({ Title, Subtitle }) {
  return (
    <TitleParent>
      {/* <h1>{Title}</h1>
      <h3>{Subtitle}</h3> */}
      <h1>
        <ShuffleText text={Title} duration={1500} />
      </h1>
      <h3>
        <ShuffleText text={Subtitle} duration={1500} />
      </h3>
    </TitleParent>
  )
}