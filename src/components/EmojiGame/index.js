/* eslint-disable prettier/prettier */
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedIdList: [],
    gameFinished: false,
    gameWon: false,
  }

  emojiClicked = id => {
    const {clickedIdList, score} = this.state

    const isPresent = clickedIdList.includes(id)

    const lengthSatisfied = clickedIdList.length === 11

    console.log(lengthSatisfied)
    console.log(clickedIdList)

    if (lengthSatisfied) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        topScore: 12,
        gameFinished: true,
        gameWon: true,
      }))
    } else if (isPresent) {
      this.setState(prevState => ({
        topScore: prevState.topScore < score ? score : prevState.topScore,
        gameFinished: true,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedIdList: [...prevState.clickedIdList, id],
      }))
    }
  }

  renderPlayScreen = () => {
    const {score, topScore, gameFinished} = this.state

    const {emojisList} = this.props

    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <>
        <NavBar score={score} topScore={topScore} gameFinished={gameFinished} />
        <div className="play-container">
          <ul className="emoji-list">
            {shuffledEmojisList.map(eachEmoji => (
              <EmojiCard
                emojiDetails={eachEmoji}
                key={eachEmoji.id}
                emojiClicked={this.emojiClicked}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  onClickPlayAgain = () => {
    this.setState({
      score: 0,
      clickedIdList: [],
      gameFinished: false,
      gameWon: false,
    })
  }

  renderGameFinishedView = () => {
    const {gameWon, score, topScore, gameFinished} = this.state

    return (
      <WinOrLoseCard
        gameWon={gameWon}
        score={score}
        topScore={topScore}
        gameFinished={gameFinished}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  renderEmojiGame = () => {
    const {gameFinished} = this.state

    switch (gameFinished) {
      case false:
        return this.renderPlayScreen()

      case true:
        return this.renderGameFinishedView()

      default:
        return null
    }
  }

  render() {
    return <div className="main-container">{this.renderEmojiGame()}</div>
  }
}

export default EmojiGame
