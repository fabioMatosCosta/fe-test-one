import React, { Component } from 'react'

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
                <p>{this.state.uri}</p>
            </div>
        )
    }
}

export default WhiskeyDetails
