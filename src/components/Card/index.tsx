import React from 'react'
import {
  InfoContent, MainContent, StyledCard, Text,
} from './style'

export type CardInfo = {
  secondaryColor: string,
  primaryColor: string,
  message: string,
  title: string,
}

type CardProps = {
  style: {
    transform: string,
    transformOrigin: string,
  }
}

const Card: React.FC<CardInfo & CardProps> = ({
  secondaryColor, primaryColor, message, title, style,
}) => {
  return (
    <StyledCard style={style}>
      <MainContent color={secondaryColor}>
        <Text color={primaryColor}>{message}</Text>
      </MainContent>
      <InfoContent>
        <Text color={primaryColor}>{title}</Text>
      </InfoContent>
    </StyledCard>
  )
}

export default Card
