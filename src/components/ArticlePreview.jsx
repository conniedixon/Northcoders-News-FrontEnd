import React, { Component } from 'react';
import SingleArticle from "./SingleArticle"


class ArticlePreview extends Component {
    state={
        showArticle: false
    }

    togglePopup() {  
        this.setState({  
             showArticle: !this.state.showArticle  
        });  
         }  

    render() {
        const article = this.props.article
        
        return (
            <>
     
            
                <h3>{article.title}</h3>
            <section>
        <p>n/{article.topic} - posted by {article.author} on {article.created_at}</p>
        <p>{article.body.slice(0, 250)}...</p> 
         <button onClick={this.togglePopup.bind(this)}> Read More...</button>

         {this.state.showArticle && <SingleArticle article={article} togglePopup={this.togglePopup}/>}

         <p>{article.comment_count} comments</p>
         <button>Upvote</button>
         <button>Downvote</button>
             </section>
        </>
        );
    }
}
    

export default ArticlePreview;