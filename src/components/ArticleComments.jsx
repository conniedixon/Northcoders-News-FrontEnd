import React, { Component } from 'react';
import * as api from "../api"

class ArticleComments extends Component {
    state={
        comments:[]
    }

    componentDidMount(){
        console.log(this.props.article_id)
        api.getArticleComments().then(comments=>{
            this.setState({comments})
        })
    }

    render() {
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