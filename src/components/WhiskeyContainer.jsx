import React, { Component } from 'react'
import {Link} from "react-router-dom"
import '../styles/WhiskeyContainer.css'

class WhiskeyContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        return (
            <div className = "whiskeyContainer column is-one-third">
                <Link to= {`${this.props.uri}`}>
                    <div>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.region}</p>
                        <h3>{this.props.cost}</h3>
                    </div>
                    <div>
                        {this.props.notes.map((note, index)=>{
                            return(
                                <p key = {index}>{note}</p>
                            )}
                        )}
                    </div>
                    <div>
                        <img src={require (`../assets/${this.props.image}`)} alt={this.props.name}/>
                    </div>
                </Link>
            </div>
        )
    }
}

export default WhiskeyContainer
