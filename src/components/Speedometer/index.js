import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  // Accelaration
  onClickAccelarate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  // Break
  onClickBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="Speedometer"
          />
          <h1 className="speed">Speed is {speed}mph</h1>
          <p className="note-text">Min Limit is 0mph, Max Limit is 200mph</p>

          <div className="btn-container">
            <button
              type="button"
              className="button1"
              onClick={this.onClickAccelarate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="button2"
              onClick={this.onClickBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
