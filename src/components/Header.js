const Header = ({title, gameText}) => {
  return (
    <header>
        <h1 className= "header">{title}</h1>
        <h4 className= "header">{gameText}</h4>
    </header>
  )
}

Header.defaultProps = {
    title: "Hangman",
    gameText: "Guess the word!",
}



export default Header;