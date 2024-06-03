import React from 'react'
import './Letter.css'

export default function Letter(props) {
  return (
    <span> <button onClick={() => props.letterButton(props.letter)} disabled={props.selected}> {props.letter} </button> </span>
  )
}
