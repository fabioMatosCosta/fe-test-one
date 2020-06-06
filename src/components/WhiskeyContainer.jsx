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
            <div className = "whiskeyContainer container column is-one-third is-vcentered">
                <Link to= {`${this.props.uri}`}>
                    <div className = "columns">
                        <div className = "column">
                            <div>
                                <h3 className ="wh-name">{this.props.name}</h3>
                                <p>{this.props.region}</p>
                                <h3>${this.props.cost}</h3>
                            </div>
                            <div className ="columns">
                                {this.props.notes.map((note, index)=>{
                                    return(
                                        <p className="column"key = {index}>{note}</p>
                                    )}
                                )}
                            </div>
                        </div>
                        <div className = "column">
                            <img className = "bottle is-overlay is-relative" src={require (`../assets/${this.props.image}`)} alt={this.props.name}/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default WhiskeyContainer
