import React from 'react'
import "./Solution.css"

export default function Solution(props) {
    return (
        <div>
            <p className='solution' >{props.solution}</p>
            <p className='hint'>Hint: {props.hint}</p>
        </div>
    )
}
