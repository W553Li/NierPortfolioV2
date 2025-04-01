import React from 'react'
import styled from 'styled-components'
import colors from './colors.json'

const BorderParentTop = styled.div`
  background-color: ${colors.colors[0].hex};
  position: fixed;
  display: flex;

  left: 0;
  top: 3rem;
  width: 100%;
  height: 0.2rem;
`

const BorderParentBottom = styled.div`
  background-color: ${colors.colors[0].hex};
  position: fixed;
  display: flex;

  left: 0;
  bottom: 4rem;
  width: 100%;
  height: 0.2rem;
`

// 24 Dips
const BorderDip = styled.div`
  background-color: ${colors.colors[1].hex};

  margin-top: 0.2rem;
  margin-left: 72px;
  width: 1rem;
  height: 0.3rem;

  // repeated for 24 dips
  box-shadow: 80px 0px 0px 0rem ${colors.colors[1].hex},
  80px 0px 0px 0rem ${colors.colors[1].hex},
  160px 0px 0px 0rem ${colors.colors[1].hex},
  240px 0px 0px 0rem ${colors.colors[1].hex},
  320px 0px 0px 0rem ${colors.colors[1].hex},
  400px 0px 0px 0rem ${colors.colors[1].hex},
  480px 0px 0px 0rem ${colors.colors[1].hex},
  560px 0px 0px 0rem ${colors.colors[1].hex},
  640px 0px 0px 0rem ${colors.colors[1].hex},
  720px 0px 0px 0rem ${colors.colors[1].hex},
  800px 0px 0px 0rem ${colors.colors[1].hex},
  880px 0px 0px 0rem ${colors.colors[1].hex},
  960px 0px 0px 0rem ${colors.colors[1].hex},
  1040px 0px 0px 0rem ${colors.colors[1].hex},
  1120px 0px 0px 0rem ${colors.colors[1].hex},
  1200px 0px 0px 0rem ${colors.colors[1].hex},
  1280px 0px 0px 0rem ${colors.colors[1].hex},
  1360px 0px 0px 0rem ${colors.colors[1].hex},
  1440px 0px 0px 0rem ${colors.colors[1].hex},
  1520px 0px 0px 0rem ${colors.colors[1].hex},
  1600px 0px 0px 0rem ${colors.colors[1].hex},
  1680px 0px 0px 0rem ${colors.colors[1].hex},
  1760px 0px 0px 0rem ${colors.colors[1].hex};
`

// 23 Trio Circles
const BorderTrioLeft = styled.div`
  background-color: ${colors.colors[1].hex};

  margin-top: 0.5rem;
  margin-left: 21px;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;

  // repeated for 23 trios
  box-shadow: 80px 0px 0px 0rem ${colors.colors[1].hex},
  80px 0px 0px 0rem ${colors.colors[1].hex},
  160px 0px 0px 0rem ${colors.colors[1].hex},
  240px 0px 0px 0rem ${colors.colors[1].hex},
  320px 0px 0px 0rem ${colors.colors[1].hex},
  400px 0px 0px 0rem ${colors.colors[1].hex},
  480px 0px 0px 0rem ${colors.colors[1].hex},
  560px 0px 0px 0rem ${colors.colors[1].hex},
  640px 0px 0px 0rem ${colors.colors[1].hex},
  720px 0px 0px 0rem ${colors.colors[1].hex},
  800px 0px 0px 0rem ${colors.colors[1].hex},
  880px 0px 0px 0rem ${colors.colors[1].hex},
  960px 0px 0px 0rem ${colors.colors[1].hex},
  1040px 0px 0px 0rem ${colors.colors[1].hex},
  1120px 0px 0px 0rem ${colors.colors[1].hex},
  1200px 0px 0px 0rem ${colors.colors[1].hex},
  1280px 0px 0px 0rem ${colors.colors[1].hex},
  1360px 0px 0px 0rem ${colors.colors[1].hex},
  1440px 0px 0px 0rem ${colors.colors[1].hex},
  1520px 0px 0px 0rem ${colors.colors[1].hex},
  1600px 0px 0px 0rem ${colors.colors[1].hex},
  1680px 0px 0px 0rem ${colors.colors[1].hex};
`

const BorderTrioRight = styled.div`
  background-color: ${colors.colors[1].hex};

  margin-left: 1rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;

  box-shadow: 80px 0px 0px 0rem ${colors.colors[1].hex},
  80px 0px 0px 0rem ${colors.colors[1].hex},
  160px 0px 0px 0rem ${colors.colors[1].hex},
  240px 0px 0px 0rem ${colors.colors[1].hex},
  320px 0px 0px 0rem ${colors.colors[1].hex},
  400px 0px 0px 0rem ${colors.colors[1].hex},
  480px 0px 0px 0rem ${colors.colors[1].hex},
  560px 0px 0px 0rem ${colors.colors[1].hex},
  640px 0px 0px 0rem ${colors.colors[1].hex},
  720px 0px 0px 0rem ${colors.colors[1].hex},
  800px 0px 0px 0rem ${colors.colors[1].hex},
  880px 0px 0px 0rem ${colors.colors[1].hex},
  960px 0px 0px 0rem ${colors.colors[1].hex},
  1040px 0px 0px 0rem ${colors.colors[1].hex},
  1120px 0px 0px 0rem ${colors.colors[1].hex},
  1200px 0px 0px 0rem ${colors.colors[1].hex},
  1280px 0px 0px 0rem ${colors.colors[1].hex},
  1360px 0px 0px 0rem ${colors.colors[1].hex},
  1440px 0px 0px 0rem ${colors.colors[1].hex},
  1520px 0px 0px 0rem ${colors.colors[1].hex},
  1600px 0px 0px 0rem ${colors.colors[1].hex},
  1680px 0px 0px 0rem ${colors.colors[1].hex};
`

const BorderTrioBottom = styled.div`
  background-color: ${colors.colors[1].hex};

  margin-top: 0.3rem;
  margin-left: 0.5rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;

  box-shadow: 80px 0px 0px 0rem ${colors.colors[1].hex},
  80px 0px 0px 0rem ${colors.colors[1].hex},
  160px 0px 0px 0rem ${colors.colors[1].hex},
  240px 0px 0px 0rem ${colors.colors[1].hex},
  320px 0px 0px 0rem ${colors.colors[1].hex},
  400px 0px 0px 0rem ${colors.colors[1].hex},
  480px 0px 0px 0rem ${colors.colors[1].hex},
  560px 0px 0px 0rem ${colors.colors[1].hex},
  640px 0px 0px 0rem ${colors.colors[1].hex},
  720px 0px 0px 0rem ${colors.colors[1].hex},
  800px 0px 0px 0rem ${colors.colors[1].hex},
  880px 0px 0px 0rem ${colors.colors[1].hex},
  960px 0px 0px 0rem ${colors.colors[1].hex},
  1040px 0px 0px 0rem ${colors.colors[1].hex},
  1120px 0px 0px 0rem ${colors.colors[1].hex},
  1200px 0px 0px 0rem ${colors.colors[1].hex},
  1280px 0px 0px 0rem ${colors.colors[1].hex},
  1360px 0px 0px 0rem ${colors.colors[1].hex},
  1440px 0px 0px 0rem ${colors.colors[1].hex},
  1520px 0px 0px 0rem ${colors.colors[1].hex},
  1600px 0px 0px 0rem ${colors.colors[1].hex},
  1680px 0px 0px 0rem ${colors.colors[1].hex};
`

export default function Border() {
  return (
    <>
      <BorderParentTop>
        <BorderDip/>
        <BorderTrioLeft>
          <BorderTrioRight/>
          <BorderTrioBottom/>
        </BorderTrioLeft>
      </BorderParentTop>
      <BorderParentBottom>
        <BorderDip/>
        <BorderTrioLeft>
          <BorderTrioRight/>
          <BorderTrioBottom/>
        </BorderTrioLeft>
      </BorderParentBottom>
    </>
  )
}
