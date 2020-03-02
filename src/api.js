const axios = require('axios')

exports.getTopics=()=>{
   return axios.get("https://ced-nc-news.herokuapp.com/api/topics").then(({data: {topics}})=>{
        return topics
    })
}