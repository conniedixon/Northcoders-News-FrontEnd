const axios = require('axios')

exports.getTopics=()=>{
   return axios.get("https://ced-nc-news.herokuapp.com/api/topics").then(({data: {topics}})=>{
        return topics
    })
}

exports.getArticles=(query)=>{
    return axios.get("https://ced-nc-news.herokuapp.com/api/articles", {params: query}).then(({data: {articles}})=>{
        return articles
    })
}

exports.getArticleById=(article_id)=>{
    return axios.get(`https://ced-nc-news.herokuapp.com/api/articles/${article_id}`).then(({data: {article}})=>{
        return article
    })
}


exports.getArticleComments=(article_id)=>{
    return axios.get(`https://ced-nc-news.herokuapp.com/api/articles/${article_id}/comments`).then(({data: {comments}})=>{
        return comments
    })
}