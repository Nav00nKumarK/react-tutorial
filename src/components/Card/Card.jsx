import React from 'react'
import Data from '../Data/Data';
import CardItems from './CardItems';
const Card = (props) => {
    return (

        <div>
            {/*         
        <img src={a} alt="Card" className="image"/>
        <p>{props.Name}</p>
        <p>{props.Rate}</p>
        <p>{props.Ratings}</p> */}
            <div className='card'> 
            {
                Data.map((card)=>(
                    <CardItems key={card.id} img={card.img} name={card.Name} rate={card.Rate} rating={card.Rating}/>
                 
                ))
            }
            </div>



        </div>
    )
}

export default Card
