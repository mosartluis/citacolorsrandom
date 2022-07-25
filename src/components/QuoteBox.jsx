import React from 'react'


const QuoteBox = ({quotesRandom, colorRandom, quote, getElementRandom}) => {

const styleButton = {
      backgroundColor: colorRandom
}

return (
    <div style={{color: colorRandom}}>
    <h2 className="fa-solid fa-quote-left"></h2>    
    <h2 className='card__title'>{quotesRandom.quote}</h2>          
     <ul className='card__list'>
      <li className='card__list'>
        <b className='card__b'>Author: </b>
        {quotesRandom.author}
      </li>
     </ul>     
  </div>
  )
}

export default QuoteBox