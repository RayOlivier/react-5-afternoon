import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { updateAgent } from "../../ducks/reducer"

class WizardFive extends Component {
  render() {
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>Are you currently working with a real estate agent?</p> <br />
          <div className="row">
            <Link to="/wSix">
              <button onClick={() => this.props.updateAgent("Yes")}>Yes</button>
            </Link>
            <Link to="/wSix">
              <button onClick={() => this.props.updateAgent("No")}>No </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(
  mapStateToProps,
  { updateAgent }
)(WizardFive)
