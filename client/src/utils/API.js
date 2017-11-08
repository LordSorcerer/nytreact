import axios from "axios";

var articleData = {title: "Amazing Fish!",
  synopsis: "Fish are amazing, you know?",
  date: Date.now(),
  url: "www.fishnaukus.com",
};

export default {
  // Gets all Articles based on options provided
  getArticles: function(options) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=742e2fe1b73d46c4b93c273a0eda6a49&q=" + options.topic
     + "&begin_date=" + options.startYear + "0101"
     + "&end_date=" + options.endYear + "1231"
     );
  },

  // Gets the Article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(ArticleData) {
    return axios.post("/api/articles", articleData);
  }
};