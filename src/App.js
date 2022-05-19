import Header from "./components/Header"
import Figure from "./components/Figure"
import { useState } from "react";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import Keyboard from "./components/Keyboard";
import { Hint } from "./components/Hint";
import Popup from "./components/PopUp";

const words = [
  ['dog', 'animal'], 
  ['cat', 'animal'], 
  ['tiger', 'animal'],
  ['hangman', 'game'],
  ['holidays', 'something you would like to last forever'],
  ['money', 'key to happiness']
              ];
let randomNumber = Math.floor(Math.random()*words.length);
let selectedWord = words[randomNumber][0];
let hintWord = words[randomNumber][1];
let buttonReset = false;

const App = () => {

  const submitLetter = (e) => {
    {selectedWord.split('').forEach(element => {
        if (selectedWord.includes(e.target.value)) {
          setCorrectLetters(correctLetters + e.target.value)
          e.target.disabled = true
        }else{
          setWrongLetters(wrongLetters + e.target.value)
          e.target.disabled = true
        }   
  })}
  }

  function playAgain() {

    setCorrectLetters([]);
    setWrongLetters([]);

    const randomNumber = Math.floor(Math.random()*words.length);
    selectedWord = words[randomNumber][0];
    hintWord = words[randomNumber][1];

    buttonReset = false;
  }

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Popup selectedWord={selectedWord} correctLetters={correctLetters} wrongLetters={wrongLetters} playAgain = {playAgain}/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Hint hintWord={hintWord} />
      <br></br>
      <Keyboard submitLetter={submitLetter} correctLetters={correctLetters} buttonReset={buttonReset}/>
    </>
  );
}

export default App;


