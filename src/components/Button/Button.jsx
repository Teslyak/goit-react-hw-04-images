import React from 'react'
import { StyledButton, StyledDivWrap } from './Buttom.styled'

export const Button = (props) => {

  return (
    <StyledDivWrap>
      <StyledButton type="button" onClick={(e) => props.loadMore(e)}>Load more</StyledButton>
    
    </StyledDivWrap>
  )
}
