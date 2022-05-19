import React from 'react'

export const WrongLetters = ({wrongLetters}) => {
  return (
    <div className='wrong-letters-container'>
        { 
        <span>
            {wrongLetters.length > 0 && <p>Wrong!</p>}  
            {wrongLetters}
        </span>  
        }
    </div>
  )
}

export default WrongLetters;
