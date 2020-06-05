import React, { Component } from 'react'
import {Link} from "react-router-dom"

class WhiskeyContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                
        }
    }

    render() {
        return (
            <div>
                <Link to= {`${this.props.uri}`}>
                    <p>{this.props.name}</p>
                    <img src={require (`../assets/${this.props.image}`)} alt={this.props.name}/>
                </Link>
            </div>
        )
    }
}

export default WhiskeyContainer
