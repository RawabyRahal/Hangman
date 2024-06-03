import React, { useState } from 'react';
import Letter from './Letter';

export default function Letters(props) {
  const generateLetterStatuses = () => {
    let letterStatus = {};
    for (let i = 65; i <= 90; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  };

  const [selectedLetters, setSelectedLetters] = useState([]);
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());

  const selectedLetter = (letter) => {
    if (letterStatus[letter]) {
      return;
    }
    props.select(letter);
    const newLetterStatus = { ...letterStatus };
    newLetterStatus[letter] = true;
    setSelectedLetters([...selectedLetters, letter]);
    setLetterStatus(newLetterStatus);
  };

  const lettersAtoI = Object.keys(letterStatus).filter((letter) => letter <= 'I');
  const lettersJtoR = Object.keys(letterStatus).filter((letter) => letter >= 'J' && letter <= 'R');
  const lettersStoZ = Object.keys(letterStatus).filter((letter) => letter >= 'S' && letter <= 'Z');

  return (
    <div>
      <br />
      <p style={{ fontWeight: '700' }}>Available Letters</p>
      <div className='letters'>{lettersAtoI.map((letter, index) => <Letter key={index} letter={letter} selected={letterStatus[letter]} letterButton={() => selectedLetter(letter)} />)}</div>
      <div className='letters'>{lettersJtoR.map((letter, index) => <Letter key={index} letter={letter} selected={letterStatus[letter]} letterButton={() => selectedLetter(letter)} />)}</div>
      <div className='letters'>{lettersStoZ.map((letter, index) => <Letter key={index} letter={letter} selected={letterStatus[letter]} letterButton={() => selectedLetter(letter)} />)}</div>
    </div>
  );
}
