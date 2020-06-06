import React, { Component } from 'react'
import whiskies from '../data/whiskies.json'
import articles from '../data/articles.json'
import WhiskeyContainer from '../components/WhiskeyContainer'
import ArticleContainer from '../components/ArticleContainer'
import '../styles/Home.css'
var _ = require('lodash')


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wh: [],
            art: [],
            regions: [],
            filteredWh: [],
            filteredRegions: []
        }
        this.toggleRegion = this.toggleRegion.bind(this);
    }

    getRegions(){
        let uniqueRegions = _.uniqBy(this.state.wh, 'region')
        let regions = ["All"]
        for(let i = 0; i< uniqueRegions.length; i++){
            regions.push(_.capitalize(uniqueRegions[i].region))
        }
        this.setState({
            regions: regions,
            filteredRegions: regions
        })
    }

    toggleRegion(clickedRegion){
        if(clickedRegion === "All"){
            this.setState({
                filteredWh: this.state.wh
            })
        }else{
            let whCopy = [...this.state.wh]
            let fltrWh = whCopy.filter(function(whiskey){
                return whiskey.region === clickedRegion.toLowerCase()
            })
            this.setState({
                filteredWh: fltrWh
            })
        }
    }


    componentDidMount(){
        this.setState({
            wh: whiskies,
            art: articles,
            filteredWh: whiskies
        }, this.getRegions)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <section className = "hero">
                        <div className = "hero-body">
                            <h1 className ="wh-title">WHISKEY SELECTION</h1>
                        </div>

                    </section>
                    <div className = "buttons is-centered">
                        {this.state.regions.map((region, index)=>{
                            return(
                                <button className = "button is-rounded" key = {index} onClick={this.toggleRegion.bind(this,region)}>{region}</button>
                            )}
                        )}
                    </div>
                </div>
                <div className = "whiskeys columns is-multiline">
                    {this.state.filteredWh.map((w, index)=>{
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