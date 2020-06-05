import React, { Component } from 'react'
import whiskies from '../data/whiskies.json'
import articles from '../data/articles.json'
import WhiskeyContainer from '../components/WhiskeyContainer'
import ArticleContainer from '../components/ArticleContainer'
import '../styles/Home.css'
var _ = require('lodash');


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wh: [],
            art: [],
            regions: []
        }
    }

    getRegions(){
        let uniqueRegions = _.uniqBy(this.state.wh, 'region')
        let regions = ["All"]
        for(let i = 0; i< uniqueRegions.length; i++){
            regions.push(_.capitalize(uniqueRegions[i].region))
        }
        this.setState({
            regions: regions
        })
    }


    componentDidMount(){
        this.setState({
            wh: whiskies,
            art: articles,
        }, this.getRegions)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>WHISKEY SELECTION</h1>
                </div>
                <div>
                    {this.state.regions.map((region, index)=>{
                        return(
                            <button key = {index}>{region}</button>
                        )}
                    )}
                </div>
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
                </div>
                <div>
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
            </div>
        )
    }
}

export default Home