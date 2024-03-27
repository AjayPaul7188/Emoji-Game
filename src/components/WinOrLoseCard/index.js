// Write your code here.

import NavBar from '../NavBar'

import './index.css'

const WinOrLoseCard = props => {
  const {gameWon, score, topScore, gameFinished, onClickPlayAgain} = props

  console.log(gameWon)

  const btnClicked = () => {
    onClickPlayAgain()
  }

  return (
    <>
      <NavBar score={score} topScore={topScore} gameFinished={gameFinished} />
      <div className="sub-container">
        {gameWon ? (
          <>
            <img
              className="win-lose-img"
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
            />
            <div className="info">
              <h1 className="out-head">You Won</h1>
              <p
                className="head1"
                style={{fontSize: '30px', marginBottom: '0px'}}
              >
                Best Score
              </p>
              <p className="score">{score}/12</p>
              <button
                className="play-again-btn"
                type="button"
                onClick={btnClicked}
              >
                Play Again
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              className="win-lose-img"
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
            />
            <div className="info">
              <h1 className="out-head">You Lose</h1>
              <p
                className="head1"
                style={{fontSize: '30px', marginBottom: '0px'}}
              >
                Score
              </p>
              <p className="score">{score}/12</p>
              <button
                className="play-again-btn"
                type="button"
                onClick={btnClicked}
              >
                Play Again
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default WinOrLoseCard
