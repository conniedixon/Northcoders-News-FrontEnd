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
                
            </div>
        );
    }
}

export default ArticleComments;