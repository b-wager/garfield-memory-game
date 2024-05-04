import './App.css';
import Board from "./Board";
import CardStyle from './CardStyle';
import {useState} from 'react';
import Select from './Select';
import Win from './Win';

const shapes = [
  ['circle', 'red'], ['circle', 'blue'], ['circle', 'green'], ['rect', 'red'],
  ['rect', 'blue'], ['rect', 'green'], ['diamond', 'red'], ['diamond', 'blue'],
  ['diamond', 'green'], ['circle', 'black'], ['rect', 'black'],
  ['diamond', 'black'], ['circle', 'orange'], ['rect', 'orange'],
  ['diamond', 'orange']
];

// If time: move to backend to let users add image (probs not lol)
const images = ["garfield.svg", "nermal.svg", "jon_arbuckle.svg"];

function App() {
  const [cards, setCards] = useState([]); // in use
  const [round, setRound] = useState(1);
  const [dims, setDims] = useState(null);
  const [cardStyle, setCardStyle] = useState(images[0]); // in use
  const [win, setWin] = useState(false);


  const handleClick = () => {
    fetch("restart", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
    });
    setDims(null);
  };


  return (
    <div className='layout'>
      <div id='panel'>
        <h1 className='title'>The Garfield Memory Game</h1>
        <h2>Round {round}</h2>
        <div onClick={handleClick}><p className='play-again'>Start New Game</p></div>
        <h2>Card Style:</h2>
        <CardStyle images={images} cardStyle={cardStyle}
          setCardStyle={setCardStyle}>
        </CardStyle>
      </div>
      {dims
        ? <Board cards={cards} setCards={setCards} setRound={setRound}
          pic={cardStyle} shapes={shapes} win={win} setWin={setWin}>
        </Board>
        : <Select setDims={setDims} />
      }
      < Win win={win} setWin={setWin} dims={dims}></Win>
    </div>

  );
}

export default App;
