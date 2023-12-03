import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossedImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        tossedImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        tossedImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {tossedImage, total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="choose-one">Heads (or) Tails</p>
          <img src={tossedImage} alt="toss result" className="coin-image" />
          <button type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="numberof">
            <p className="total">Total: {total}</p>
            <p className="total">Heads: {heads}</p>
            <p className="total">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
