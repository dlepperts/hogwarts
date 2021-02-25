import React, { Component } from "react";
import Hog from './Hog.js'

class HogIndex extends Component {

  renderHogs = () => {
    console.log(this.props.allHogs)
    return this.props.allHogs.map(eachHog => {
      return <Hog hog={eachHog}/>
    })
  }

  render() {
    return (
      <div className='ui three cards'>
        {this.renderHogs()}
      </div>
    );
  }
}

export default HogIndex;
