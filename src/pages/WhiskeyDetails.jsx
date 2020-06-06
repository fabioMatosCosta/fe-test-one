import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import whiskies from '../data/whiskies.json'
var _ = require('lodash')

class WhiskeyDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uri: this.props.match.params.uri,
            whiskey:{image: ""}
        }
    }

    getInfo(){
        let whsk = whiskies.find((whiskey)=>{
            return whiskey.uri === `/${this.state.uri}`
        })
        return whsk
    }

    componentDidMount(){
        let wh = this.getInfo()
        console.log(wh)
        this.setState({
            whiskey: wh
        })
    }

    render() {
        return (
            <div>
                <Link to= {'/'}>
                    <button className="button is-rounded">Go Back</button>
                </Link>
                <div className="content">
                    <h1>{_.capitalize(this.state.whiskey.title)}</h1>
                    <h4>{_.capitalize(this.state.whiskey.region)} Region</h4>
                    {/* <img src={require (`../assets/${this.state.whiskey.image}`)} alt={this.state.whiskey.title}/> */}
                </div>
                <button className= "button is-rounded">Buy Now</button>
            </div>
        )
    }
}

export default WhiskeyDetails
