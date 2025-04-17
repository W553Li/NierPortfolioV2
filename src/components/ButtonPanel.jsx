import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import colors from './colors.json';

const SidebarParent = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: calc(100vh - 29rem);
  left: 3.5%;
  bottom: 0.5rem;
`

const BarsContainer = styled.div`
//   z-index: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: absolute;
  // top: 1.5rem;
  bottom: 1.5rem;
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
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 1rem;
  width: 100%;
  z-index: 2;
  min-height: calc(100vh - 29rem);  // Add minimum height

  > * {
    position: relative;
    scroll-snap-align: end;    // Make each button a snap target
    scroll-snap-stop: always;    // Force stopping at each snap point
  }
`

const PanelContainer = styled.div`
  position: relative;
  background-color: ${colors.colors[3].hex};
  
  width: 27%;
  // top: 1.5rem;
  bottom: 1.5rem;
  left: 3.5%;
`

const PanelTop = styled.div`
  background-color: ${colors.colors[0].hex};
  position: fixed;
  width: 24.5%;
  height: 2px;
  margin-left: 1rem;
  top: 16rem;
  z-index: 3;
`

const TopDot = styled.div`
  background-color: ${colors.colors[0].hex};
  position: fixed;
  
  left: 33.3%;
  top: 16rem;
  width: 4px;
  height: 4px;
  border-radius: 50%;
`

const BottomDot = styled.div`
  background-color: ${colors.colors[0].hex};
  position: fixed;
  
  left: 33.3%;
  bottom: 15rem;
  width: 4px;
  height: 4px;
  border-radius: 50%;
`

const PanelBottom = styled.div`
  background-color: ${colors.colors[0].hex};
  position: fixed;
  width: 24.5%;
  height: 2px;
  margin-left: 1rem;
  bottom: 15rem;
  z-index: 3;
`

const PanelMain = styled.div`
  background-color: ${colors.colors[3].hex};
  position: fixed;
  z-index: 1;  // Lower z-index so arrows can appear
  width: 26.5%;
  bottom: 15.5rem;
  top: 16.5rem;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: visible;
    // transform: translateX(-0.75rem);

    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.colors[0].hex};
    opacity: 0.5;
  }

  &::-webkit-scrollbar-track {
    // margin-right: -0.75rem;
  }

  // -ms-overflow-hide: scrollbar;
  // scrollbar-width: none;
`


const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 36px; // Match ButtonContainer gap
  min-height: calc(100vh - 32rem);
  top: 16.5rem;
  bottom: 15.5rem;
  left: 2%;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
  pointer-events: none;
  padding: 1rem 2rem;
  scroll-behavior: smooth;

  // Hide scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-hide: scrollbar;
  scrollbar-width: none;
`


const ArrowBase = styled.div`
  transition: all 0.4s ease;
  position: relative;
  pointer-events: none;
  opacity: 1;
  z-index: 10;  // Higher z-index
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-bottom: 12px solid ${colors.colors[0].hex};
  rotate: 270deg;
  left: 0;  // Reset left position
  top: 0.5rem;  // Reset top position

  // little box things
  &:before {
    content: '';
    position: absolute;
    z-index: 1;

    width: 4px;
    height: 0px;
    left: -2px;
    top: 10px;
    border-bottom: 4px solid ${colors.colors[3].hex};

    box-shadow: 8px 22px 0px 0px ${colors.colors[0].hex},
    -8px 22px 0px 0px ${colors.colors[0].hex};
  }

  // right side of arrow
  &:after {
    content: '';
    position: absolute;
    left: -8px;
    top: 12px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top: 24px solid ${colors.colors[0].hex};
  }
`

const Arrow = React.memo(({ isActive, isClicked }) => {
  return (
    <ArrowBase
      style={{
        // opacity: isActive ? 1 : 0
        opacity: isClicked ? 1 : (isActive ? 1 : 0)
      }}
    />
  );
});


export default function ButtonPanel({buttons, onButtonClick}) {
  const [active, setActive] = useState("");
  const [clicked, setClicked] = useState(null);
  const panelRef = useRef(null);
  const arrowContainerRef = useRef(null);

  const handleMouseEnter = (button) => {
    setActive(button);
  };

  const handleMouseLeave = () => {
    setActive("");
  };

  const handleScroll = (e) => {
    if (arrowContainerRef.current) {
      // Directly match scroll positions
      arrowContainerRef.current.scrollTop = e.target.scrollTop;
    }
  };

  const handleSelect = (buttonName) => {
    setClicked(buttonName);
    onButtonClick(buttonName);
  };

  useEffect(() => {
    // Reset scroll positions when component mounts/updates
    if (panelRef.current && arrowContainerRef.current) {
      arrowContainerRef.current.scrollTop = panelRef.current.scrollTop;
    }
  }, [buttons]);

  return (
    <SidebarParent>
      <BarsContainer>
        <SidebarItem />
        <SidebarItem />
      </BarsContainer>
      <ArrowContainer ref={arrowContainerRef}>
        {buttons.map((button, index) => (
          <Arrow 
            key={`arrow-${index}`}
            isActive={active === button}
            isClicked={clicked === button}
          />
        ))}
      </ArrowContainer>

      <PanelContainer>
        <PanelTop/>
        <TopDot/>
        <PanelMain
          ref={panelRef}
          onScroll={handleScroll}
        >
          <ButtonContainer>
            {buttons.map((button, index) => (
              <div 
                key={`button-wrapper-${index}`}
                onMouseEnter={() => handleMouseEnter(button)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSelect(button)}
              >
                <Button panel={true} isActive={clicked === button}>
                  {button}
                </Button>
              </div>
            ))}
          </ButtonContainer>
        </PanelMain>
        <PanelBottom/>
        <BottomDot/>
      </PanelContainer>
    </SidebarParent>
  );
}
