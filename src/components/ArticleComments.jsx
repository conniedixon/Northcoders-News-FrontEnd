import React, { Component } from 'react';
import * as api from "../api"
import Loading from "./Loading"

class ArticleComments extends Component {
    state={
        isLoading: true,
        comments: []
    }
    
    componentDidMount() {
        api.getArticleComments(this.props.article_id).then((comments)=>{
            this.setState(currentState=>{
                return {
                    isLoading:false,
                    comments
                }
            }
                
                )
        })
    }

    render() {
        if (this.state.isLoading) return <Loading/>
        return (
            <div>
               { this.state.comments.map((comment)=>{
                    return (
                        <>
                    <p>{comment.body}</p>
                    <p>--{comment.author}, {comment.created_at}</p>
                    <button>Upvote</button><p>{comment.votes} votes</p><button>Downvote</button>
                    </>
                    )
                    })
                }
                </div>
                )
}
}


export default ArticleComments;