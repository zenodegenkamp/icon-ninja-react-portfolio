import React from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import Die from "./components/Die"
import { onSnapshot, addDoc } from "firebase/firestore"
import { scoresCollection } from "./firebase"
import Plx from "react-plx"
import Spline from '@splinetool/react-spline';

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [winGame, setWinGame] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const [highscore, setHighscore] = React.useState([])
    const [gameStarted, setGameStarted] = React.useState(true)

   console.log(gameStarted)

    React.useEffect(() => {
        const unsubscribe = onSnapshot(scoresCollection, function(snapshot){
            const scoreArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
        }))
        console.log(scoreArr)
        setHighscore(scoreArr)
        })
        return unsubscribe
    }, [])
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setCount(0)
            setWinGame(true)
            createNewHighscore()
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 20; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!winGame) {
            setCount(oldCount => {
                return oldCount + 1
            })
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setWinGame(false)
            setDice(allNewDice())
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    function handleBtnClick(){
        setGameStarted(true)
    }

    async function createNewHighscore(){
        const newScore = {
            body: count
        }
        const newScoreRef = await addDoc(scoresCollection, newScore)
    
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))

    const scoreElements = highscore.map(score => {
        return score.body
    })

    const scoreElementsHTML =  scoreElements.sort().slice(0, 3).map(score => {
        return <li>{score}</li>
    })
    
    return (
            <div className='body'>
              <Plx
                parallaxData={[
                  {
                    start: 0,
                    duration: 800,
                    easing: "ease-in",
                    properties: [
                      {
                        startValue: 1,
                        endValue: 4,
                        property: "scale"
                      }
                    ]
                  }
                ]}
                style={{
                  position: "fixed",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 100
                }}
               
              >
                 <Spline scene="https://prod.spline.design/lb5LkII4DL1Q4HbA/scene.splinecode" />
                {/* <img className="home-scroll-background" style={{ width: "100%"}} src={stadBackground} alt="foreground" /> */}
              </Plx>
              <Plx
                parallaxData={[
                  {
                    start: 0,
                    duration: 1500,
                    properties: [
                      {
                        startValue: 1,
                        endValue: 2,
                        property: "scale"
                      }
                    ]
                  }
                ]}
                style={{  
                  position: "fixed",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%"
                }}
              >
                <Spline scene="https://prod.spline.design/CkNCZZYsXmHU1i1W/scene.splinecode" />
              </Plx>
              <Plx
                parallaxData={[
                  {
                    start: 0,
                    end: 800,
                    properties: [
                      {
                        startValue: -5,
                        endValue: 5,
                        property: "opacity"
                      }
                    ]
                  }
                ]}
                style={{
                  position: "fixed",
                  left: 0,
                  top: 0,
                  width: "100%",
                  zIndex: 103
                }}
              >

                {gameStarted ? (
                    <div className="main-container">
                        
                        <main>
                            {winGame && <Confetti />}
                            <div className="flex-container">
                                <div className="scoreboard">
                                    <div className="score">{count}</div>
                                </div>
                                <div className="dice-section">
                                    <div className="dice-container">
                                        {diceElements}
                                    </div>
                                    <button
                                        className="roll-dice"
                                        onClick={rollDice}
                                    >
                                        {winGame ? "New Game" : "Roll"}
                                    </button>
                                </div>
                                <div className="highscore">
                                    <h1> Top scores </h1>
                                    <ol>
                                        {scoreElementsHTML}
                                    </ol>
                                </div>
                            </div>
                        </main>
                        <Spline className="spline-bg" scene="https://prod.spline.design/ZDp5wHdSm1Gt7KFi/scene.splinecode" />
                    </div>
                ) : (

                    <div className='hero-text'>
                      
                        <button onClick={handleBtnClick} className="btn-14">Start the game</button>
                    </div>
                )}
                
              </Plx>
              
            </div>
        )

}


 