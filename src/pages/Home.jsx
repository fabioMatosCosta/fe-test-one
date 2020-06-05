import React, { Component } from 'react'
import whiskies from '../data/whiskies.json'
import articles from '../data/articles.json'
import WhiskeyContainer from '../components/WhiskeyContainer'
import ArticleContainer from '../components/ArticleContainer'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wh: [],
            art: []
        }
    }

    componentDidMount(){
        this.setState({
            wh: whiskies,
            art: articles
        })
    }

    render() {
        return (
            <div>
                {this.state.wh.map((w, index)=>{
                    return(
                        <WhiskeyContainer
                            key = {index}
                            name = {w.title}
                            cost = {w.cost}
                            uri = {w.uri}
                            region = {w.region}
                            notes = {w.tasting_notes}
                            image = {w.image}
                        />
                    )}
                )}
                {this.state.art.map((a, index)=>{
                    return(
                        <ArticleContainer
                            key = {index}
                            title = {a.title}
                            teaser = {a.teaser}
                            image = {a.img}
                            url = {a.url}
                        />
                    )}
                )}


            </div>
        )
    }
}

export default Home
