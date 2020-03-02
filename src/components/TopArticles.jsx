import React, { Component } from 'react';
import * as api from "../api"

class TopArticles extends Component {
    state={
        articles:[],
        isLoading:true
    }

    componentDidMount() {
        api.getArticles({sort_by:"votes", limit:4}).then(articles=>{
            this.setState(currentState=>{
                return {
                    articles, isLoading: false
                }
            }
            )
        })
    }


    render() {
        return (
            <div>
                {this.state.articles.map(article=>{
                    return <ArticleCard />
                })}
            </div>
        );
    }
}

export default TopArticles;