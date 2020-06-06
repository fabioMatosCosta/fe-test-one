import React, { Component } from 'react'
import {Link} from "react-router-dom"
import '../styles/WhiskeyContainer.css'
var _ = require('lodash')


class WhiskeyContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        return (
            <div className = "container column is-one-third">
                <Link to= {`${this.props.uri}`}>
                    <div className ="whiskeyContainer">
                        <div className ="wh-info">
                            <div className ="wh-text">
                                <h3 className ="wh-name">{_.capitalize(this.props.name)}</h3>
                                <p className ="wh-region">{_.capitalize(this.props.region)} Region</p>
                                <h3 className = "wh-name">${this.props.cost}</h3>
                            </div>
                            <div className ="notes-container">
                            <div className ="wh-notes">
                                {this.props.notes.map((note, index)=>{
                                    return(
                                        <p className="note" key = {index}>{_.capitalize(note)}</p>
                                    )}
                                )}
                            </div>

                            </div>
                        </div>
                        <div className ="bottle">
                            <img src={require (`../assets/${this.props.image}`)} alt={this.props.name}/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default WhiskeyContainer
