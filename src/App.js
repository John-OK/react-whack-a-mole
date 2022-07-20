import './App.css'
import React, { useEffect, useState } from 'react'
import Mole from './components/mole/Mole.js'

const [EASY, NORMAL, HARD, INSANE] = [2000, 1500, 1000, 50]


function App() {
  // states
  const [dens, setDens] = useState(getDensState())
  const [points, setPoints] = useState(0)
  const [difficulty, setDifficulty] = useState(NORMAL)

  // effects
  useEffect(() => {
    startGame()
  }, [difficulty])

  // helpers

  function startGame() {
    console.log(difficulty)
    setInterval(() => {
      setDens(getDensState())
    }, difficulty)
    console.log(difficulty)
  }

  function clickHandler(e) {
    setDifficulty(+(e.target.value))
    console.log(difficulty)
  }

  function getDensState() {
    return new Array(9).fill({}).map(() => {
      return {
        isMoleVisible: [true,false][Math.round(Math.random())]
      }
    })
  }

  function onMoleWhacked() {
    setPoints(points + 1)
    console.log("You hit a mole!")
  }

  function onMissMole() {
    console.log("You missed!")
  } 

  // renders
  const denElements = dens.map((den, index) => {
    let func = onMissMole
    if (den['isMoleVisible']) {
      func = onMoleWhacked
    }
    return (
      <Mole den={den} func={func} key={`mole-${index}` }
      />
    )
  })

  return (
    <div className="App">
      <h1>WHACK-A-MOLE!</h1>
      <select value={difficulty} onChange={clickHandler}>Difficulty:
        <option value={EASY}>
          Easy
        </option>
        <option value={NORMAL}>
          Normal
        </option>
        <option value={HARD}>
          Hard
        </option>
        <option value={INSANE}>
          Insane
        </option>
      </select>
      <h2>Points: { points }</h2>
      <div className="dens">
        { denElements }
        <div style={{clear: 'both'}}></div>
      </div>
    </div>
  )
}

export default App
