import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import Saved from "../Saved";
import Search from "../Search";

class Main extends Component {
  state = {
    articles: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    /*this.loadArticles();*/
  }



  render() {
    return (
      <div>
        <Search> </Search>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <Saved> </Saved>
      </div>
    )
  }
}

export default Main;