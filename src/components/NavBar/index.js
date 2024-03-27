// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameFinished} = props

  const showClass = gameFinished ? 'no-show' : 'show'

  return (
    <nav className="nav-header">
      <div className="logo-cont">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="head1" style={{fontSize: '15px'}}>
          Emoji Game
        </h1>
      </div>

      <div className={showClass}>
        <p className="score-head">Score: {score}</p>
        <p className="score-head">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
