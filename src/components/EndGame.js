import React from 'react'
import './EndGame.css'

export default function EndGame(props) {
    console.log(props)
    return (
        <div>
            {
                props.score > 0 ?
                    <div className='congrats'>
                        <p>Wohoo! Congratulations!</p>
                        Your Score: {props.score}<br></br><br></br>
                    </div>
                    :
                    <p className='gameover'>GAME OVER!</p>
            }
            <br></br>
            <button className='restart' onClick={() => props.restartGame()}>Play Again?</button>
        </div>
    )
}
