import React, { Component } from 'react';
import ArticleCard from "./ArticleCard"
import * as api from "../api"
import Loading from "./Loading"

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
        if (this.state.isLoading) return <Loading/>
        return (
            <div>
                <h3>Top Articles</h3>
                {this.state.articles.map(article=>{
                    return <ArticleCard key={article.article_id} article={article}/>
                })}
            </div>
        );
    }
}

export default TopArticles;