import React, { Component } from "react";

import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import babe from '../hog-imgs/babe.jpg'
import bailey from '../hog-imgs/bailey.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy_note from '../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg'
import peppa from '../hog-imgs/peppa.jpg'
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import piglet from '../hog-imgs/piglet.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffle_shuffle from '../hog-imgs/truffle_shuffle.jpg'

const imgMapper = {
    "Augustus Gloop":augustus_gloop,
    "Babe": babe,
    "Bailey": bailey,
    "Cherub": cherub,
    "Galaxy Note": galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    "Peppa": peppa,
    "Piggy smalls": piggy_smalls,
    "Piglet": piglet,
    "Porkchop": porkchop,
    "Trouble": trouble,
    "Truffle Shuffle": truffle_shuffle
}

export default class Hog extends Component {

    constructor() {
        super()
        this.state = {
            showDetails: false
        }
    }
    
    generateImageElement = () => {
        return <img src={imgMapper[this.props.hog.name]} alt={this.props.hog.name}></img>
    }

    renderDetails = () => {
        return (
            <div>
                <p>{this.props.hog.specialty}</p>
                <p>{this.props.hog.greased}</p>
                <p>{this.props.hog.weight}</p>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render() {
        console.log(this.state)
        return(
            <div className='ui card pigTile' onClick={this.handleClick}>
                <h1>{this.props.hog.name}</h1>
                {this.generateImageElement()}
                {this.state.showDetails ? this.renderDetails() : null}
            </div>
        );
    }
}