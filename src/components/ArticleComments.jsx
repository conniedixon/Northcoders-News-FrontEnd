import React, { Component } from 'react';

class ArticleComments extends Component {
    state={
        comments:[]
    }

    componentDidMount(){
        getArticleComments(this.props.article).then(comments=>{
            this.setState({comments})
        })
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment=>{
                    return (
                    <p>comment.body</p>
                    <p> - {comment.author}, {comment.created_at}</p>
                    )
                })}
            </div>
        );
    }
}

export default ArticleComments;