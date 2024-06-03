import React from 'react'
import './Score.css'
export default function Score(props) {
    return (
        <div>
            <div className='score'>Score: <span className={props.score >= 80 ? 'high-score': (props.score >= 50 ? 'medium-score' : 'low-score') }>{props.score}</span></div><br></br>
            <div className='remain-gusses'>Remaining guesses: <div className='remain'>{props.remainingGuesses} / 6</div></div>
            <br></br>
        </div>
    )
}
