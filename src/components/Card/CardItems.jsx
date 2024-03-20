import React from 'react'

const CardItems = (props) => {
  return (
   <>
   <img src={props.img} />
   <p>{props.name}</p>
   <p>{props.rate}</p>
   <p>{props.rating}</p>

   </>
    
    

  )
}

export default CardItems