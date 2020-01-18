import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Text = styled.h3`
  color: ${prop('color')};
  font-family: ${prop('fontFamily')};
  font-size: 1rem;
  margin: 0;
  text-align: center;
`

export const StyledCard = styled.div`
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  box-sizing: content-box;
  display: grid;
  grid-gap: 0.3rem;
  grid-template-rows: 1fr auto;
  height: 14rem;
  width: 10rem;
`

export const MainContent = styled.div`
  background-color: ${prop('color')};
  display: grid;
  grid-gap: 0.6rem;
  padding: 0.3rem;
`

export const InfoContent = styled.div`
  background-color: #fff;
  display: grid;
  grid-gap: 0.6rem;
  padding: 0.3rem;
`
