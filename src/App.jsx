import { useState} from 'react'
import './App.css'
import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard';



function App() {
  //the array to randomize pokemon
  const initArray = Array.from({ length: 10}, () => Math.floor(Math.random() * 1000) + 1);
  const [pokeArray, setPokeArray] = useState(initArray);
  
  //score setting for the scoreboard
  const [score, setScore] = useState(0);
  const [guessedCards, setGuessedCards] = useState([]);
  const[bestScore, setBest] = useState(0);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleShuffle = () => {
    setPokeArray(shuffleArray(pokeArray));
  };

  const handleCardClick = (id) => {
    //if the set of clickedCards does not contain this id
    if(guessedCards.includes(id) == false){
      setGuessedCards([...guessedCards, id]);
      setScore(score + 1);
    } else {
      // Card has been guessed before, reset the game
      setGuessedCards([]);
      if(score > bestScore){
        setBest(score);
      }
      setScore(0);
    }
    handleShuffle();
  }

  return (
    <>
      <ScoreBoard score = {score} total={initArray.length} bestScore = {bestScore}/>
      <div className='CardContainer'>
      {pokeArray.map(id => (
                    <Card key={id} id={id} onClick={() => handleCardClick(id)} />
                ))}
      </div>
      <p>background credit: 438emily</p>
    </>
  );
}

export default App
