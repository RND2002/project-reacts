import React from 'react'
import Card from './Card'
import './Cards.css'

const Cards = ({cards,removeTour}) => {
  return (
    <section>
        <div className='title'>
                <h2>Our tours</h2>
                <div className='underline'></div>
        </div>
        <div>
        {cards.map((card)=>{
                return < Card key={card.id} {...card} removeTour={removeTour} />
        })}
        </div>
    </section>
  )
}

export default Cards