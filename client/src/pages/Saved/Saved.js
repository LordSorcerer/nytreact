import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Saved extends Component {
render(){
  return (
    <div>
    <h1>List of Saved Articles</h1>
    <List>
    <ListItem>Dogs
    </ListItem>
    </List>
    </div>
  );
};

 
};

export default Saved;
