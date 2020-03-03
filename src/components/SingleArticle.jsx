import React from 'react';
import "./popup.css"
import * as api from "../api"

class SingleArticle extends React.Component {  
    state={
        comments:[]
    }


    componentDidMount() {
        api.getArticleComments(this.props.article.article_id).then((comments)=>{
            this.setState({comments})
        })
    }

    render() { 
        const article=this.props.article 
        console.log(article)
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{article.title}</h1>
<h6>n/{article.topic} - posted by {article.author} on {article.created_at}</h6> 
<p>{article.body}</p>
<h4>Comments</h4>
{/* {this.state.comments.map(comment=>{

})} */}
<button onClick={this.props.togglePopup}>close</button>  
</div>  
</div>  
);  
}  
}  

export default SingleArticle;