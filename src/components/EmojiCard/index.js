// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props

  const {id, emojiName, emojiUrl} = emojiDetails

  const clickEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li className="each-emoji">
      <button className="emoji-btn" type="button" onClick={clickEmoji}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
