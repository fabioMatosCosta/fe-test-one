import React, { Component } from 'react'
import {Link} from "react-router-dom"
import '../styles/WhiskeyContainer.css'
var _ = require('lodash')


class WhiskeyContainer extends Component {

    getStyle(region){
        let style = {}
        switch(region){
            case 'islands':
                style = {'backgroundImage': 'linear-gradient(to right, #D71E44 , #9E1B34)'}
                break
            case 'islay':
                style = {'backgroundImage': 'linear-gradient(to right, #A5238E , #6E2671)'}
                break
            case 'highlands':
                style = {'backgroundImage': 'linear-gradient(to right, #563494 , #322773)'}
                break
            case 'lowlands':
                style = {'backgroundImage': 'linear-gradient(to right, #0663AE , #174272)'}
                break
            case 'speyside':
                style = {'backgroundImage': 'linear-gradient(to right, #1AB467 , #007B46)'}
                break
            case 'campbeltown':
                style = {'backgroundImage': 'linear-gradient(to right, #F3B41B , #D29D2A)'}
                break
            default:
                style = {'backgroundImage': 'linear-gradient(to right, #D71E44 , #9E1B34)'}
        }
        return style
    }

    getColor(region){
        let style = {}
        switch(region){
            case 'islands':
                style = {'border': '2px solid #9E1B34'}
                break
            case 'islay':
                style = {'border': '2px solid #6E2671'}
                break
            case 'highlands':
                style = {'border': '2px solid #322773'}
                break
            case 'lowlands':
                style = {'border': '2px solid #174272'}
                break
            case 'speyside':
                style = {'border': '2px solid #007B46'}
                break
            case 'campbeltown':
                style = {'border': '2px solid #D29D2A'}
                break
            default:
                style = {'border': '2px solid #9E1B34'}
        }
        return style
    }

    render() {
        return (
            <div className = "container column is-one-third wh-container">
                <Link to= {`${this.props.uri}`}>
                    <div className ="whiskeyContainer">
                        <span style = {this.getColor(this.props.region)} className="line"></span>
                        <div className ="wh-info">
                            <div className ="wh-text">
                                <h3 className ="wh-name">{_.capitalize(this.props.name)}</h3>
                                <p className ="wh-region">{_.capitalize(this.props.region)} Region</p>
                                <h3 className = "wh-name">${this.props.cost}</h3>
                            </div>
                            <div className ="notes-container">
                                <div style = {this.getStyle(this.props.region)} className ="wh-notes">
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
