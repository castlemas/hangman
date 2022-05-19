import React, { useEffect } from 'react'
import { checkWin } from '../helpers/helpers';

export const PopUp = ({correctLetters, wrongLetters, selectedWord, playAgain}) => {

  let finalMessage = '';
  let revealWord = '';

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = `Congratulations! You've guessed the word!`;
  } else if ( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'You lost!';
    revealWord = `The word was: ${selectedWord}`;
  }

  useEffect(() => console.log({finalMessage}),[finalMessage])

  return (
    <div className = 'popup-container' style={finalMessage !== '' ? {display:'flex'} : {display:'none'}}>
      <div className='popup'>
        <h2>{finalMessage}</h2>
        <h3>{revealWord}</h3>
        <button onClick = {playAgain}>Play again</button>
      </div>
    </div>
  )
}

export default PopUp;