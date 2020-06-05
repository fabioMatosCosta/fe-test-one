import React, { Component } from 'react'

class ArticleContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.teaser}</p>
                    <img src={require (`../assets/${this.props.image}`)} alt=""/>
                </a>
            </div>
        )
    }
}

export default ArticleContainer
