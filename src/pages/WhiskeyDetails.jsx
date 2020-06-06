import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WhiskeyDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uri: this.props.match.params.uri
        }
    }

    render() {
        return (
            <div>
                <Link to= {'/'}>
                    <button>Go Back</button>
                </Link>
                <p>{this.state.uri}</p>
            </div>
        )
    }
}

export default WhiskeyDetails
