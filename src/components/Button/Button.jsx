import React from 'react'

export const Button = (props) => {

  return (
    <>
    <button type="button" onClick={(e) => props.loadMore(e)}>Load more</button>  
    </>
  )
}
