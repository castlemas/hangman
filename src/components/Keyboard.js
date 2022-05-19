import React, { useEffect } from 'react'


export const Keyboard = ({submitLetter, buttonReset}) => {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  useEffect(() => console.log({buttonReset}),[buttonReset])

  return (
    <div className='keyboard'>
        {alphabet.split("").map(letter => (
            
                <button disabled={buttonReset} key={letter} value={letter} onClick={submitLetter} className='kbd'>
                    {letter}
                </button>
            ))
        }
    </div>
  )
}

export default Keyboard;

