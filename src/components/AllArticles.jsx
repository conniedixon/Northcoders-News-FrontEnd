import React, { Component } from 'react';
import Loading from "./Loading"
import ArticlePreview from "./ArticlePreview"
import * as api from "../api"

class AllArticles extends Component {
    state={
        isLoading:true,
        articles: []
    }

    componentDidMount() {
        api.getArticles().then(articles=>{
            this.setState(currentState=>{
                return {
                    articles, isLoading: false
                }
            })
        })
    }

    render() {
        if (this.state.isLoading) return <Loading/>
        return (
            <div>
                <h3>All Articles</h3>
                {this.state.articles.map(article=>{
                    return <ArticlePreview key={article.article_id} article={article}/>
                })}
                
            </div>
        );
    }
}

export default AllArticles;