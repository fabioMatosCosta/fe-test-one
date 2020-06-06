import React, { Component } from 'react'
import '../styles/ArticleContainer.css'

class ArticleContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className = "container">
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <div className= "image">
                        <img className = "article-img" src={require (`../assets/${this.props.image}`)} alt=""/>
                    </div>
                    <div className = "is-overlay columns has-text-left text-container article-text">
                        <div className ="column article">
                            <div className="columns">
                                <div className ="column is-four-fifths">
                                    <h2 className="article-title">{this.props.title.toUpperCase()}</h2>

                                </div>
                                <div className="column"></div>
                            </div>
                            <p className ="article-teaser">{this.props.teaser}</p>
                        </div>
                        <div className ="column"></div>
                    </div>
                </a>
            </div>
        )
    }
}

export default ArticleContainer
