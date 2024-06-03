import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import { useEffect, useState } from 'react';
import EndGame from './components/EndGame';

function App() {
  const [score, setScore] = useState(100)
  const [remainingGuesses, setRemainingGuesses] = useState(6)
  const [currentWord, setCurrentWord] = useState(0)
  const solution =
    [
      {
        word: "HELLOWORLD",
        hint: "common comment used among developers",
      },
      {
        word: "HOLA",
        hint: "common Spanish greeting",
      },
      {
        word: "REACT",
        hint: "JavaScript library for building UI",
      }
    ]
  // )
  const [underscoreList, setUnderscoreList] = useState(solution[currentWord].word.split('').map(function (char) {
    return '_'
  }).join(''))

  const selectButton = (letter) => {
    let newUnderscoreList = underscoreList;
    if (solution[currentWord].word.split('').includes(letter)) {
      solution[currentWord].word.split('').forEach((l, index) => {
        index = Number(index)
        if (l === letter) {
          newUnderscoreList = newUnderscoreList.slice(0, index) + letter + newUnderscoreList.slice(index + 1);
        }
      })
      setScore(score + 5)
    }
    else {
      setScore(Math.max(score - 20, 0))
      setRemainingGuesses(remainingGuesses - 1)
    }
    setUnderscoreList(newUnderscoreList)
  }

  const getHangmanImg = (attempts) => {
    return `hangman/hangman-${attempts}.svg`
  }

  // useEffect(() => {
  //   setUnderscoreList(solution[currentWord].word.split('').map(() => '_').join(''));
  //   setScore(100);
  //   setRemainingGuesses(6)
  // }, [currentWord]);

  const restartGame = () => {
    const indexWord = (currentWord + 1) % solution.length;
    setUnderscoreList(solution[indexWord].word.split('').map(() => '_').join(''));
    setScore(100);
    setRemainingGuesses(6)
    setCurrentWord(indexWord)
  };

  return (
    <div className="App">
      <h1>THE HANGMAN</h1>
      <img src={getHangmanImg(6 - remainingGuesses)} />
      {
        ((underscoreList === solution[currentWord].word || remainingGuesses <= 0)
          && <EndGame score={score} restartGame={restartGame} />)
        ||
        <div className='result'>
          <Score score={score} remainingGuesses={remainingGuesses} />
          <Solution solution={underscoreList} word={solution[currentWord].word} hint={solution[currentWord].hint} />
          <Letters select={selectButton} />
        </div>
      }
    </div>
  );
}

export default App;
