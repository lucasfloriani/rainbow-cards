import React from 'react'
import Card, { CardInfo } from '../Card'
import { Wrapper } from './style'

type RainbowProps = { list: Array<CardInfo> }

const Rainbow: React.FC<RainbowProps> = ({ list }) => {
  const rotationForEachItem = 90 / list.length
  return (
    <Wrapper>
      {list.map((card, i) => (
        <Card
          key={card.message}
          style={{
            transform: `rotateZ(${i * rotationForEachItem}deg)`,
            transformOrigin: '0% 100%',
          }}
          {...card}
        />
      ))}
    </Wrapper>
  )
}

export default Rainbow
