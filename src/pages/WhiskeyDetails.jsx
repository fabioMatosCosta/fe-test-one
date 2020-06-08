import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import whiskies from '../data/whiskies.json'
import '../styles/WhiskeyDetails.css'
var _ = require('lodash')


class WhiskeyDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uri: this.props.match.params.uri,
            whiskey:{
                tasting_notes: [],
                image: "ardbeg.png"
            }
        }
    }

    getInfo(){
        let whsk = whiskies.find((whiskey)=>{
            return whiskey.uri === `/${this.state.uri}`
        })
        return whsk
    }

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

    componentDidMount(){
        let wh = this.getInfo()
        this.setState({
            whiskey: wh
        })
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to= {'/'}>
                        <button className="button is-rounded navbar-item">
                            <span className="icon" role="img" aria-label="return" >◀️</span>
                            <span>Go Back</span>
                        </button>
                    </Link>
                </div>
                    <div className="columns details">
                        <div className="column ">
                            <section className = "hero">
                                <div className = "hero-body">
                                    <h1 className ="wh-title has-text-white">{_.capitalize(this.state.whiskey.title)}</h1>
                                    <h4 className ="region is-size-3">{_.capitalize(this.state.whiskey.region)} Region</h4>
                                    <div className ="nt-container">
                                        <div style = {this.getStyle(this.state.whiskey.region)} className ="wh-notes">
                                            {this.state.whiskey.tasting_notes.map((note, index)=>{
                                                return(
                                                    <p className="note" key = {index}>{_.capitalize(note)}</p>
                                                )}
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className = "buy">
                                <h3 className = "wh-title has-text-white">${this.state.whiskey.cost}</h3>
                                <button className = "button is-rounded is-size-4">Buy Now</button>
                            </div>
                        </div>
                        <div className="column">
                            <div className ="bottle-img">
                                <img src={require(`../assets/${this.state.whiskey.image}`)} alt={this.state.whiskey.title}/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default WhiskeyDetails
