import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  displayArticles = (res) => {  
        this.setState({ articles: res.data.response.docs});
        console.log(this.state.articles);
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//Accepts search options and formats search.
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      API.getArticles({
         topic: this.state.topic,
         startYear: this.state.startYear,
         endYear: this.state.endYear
        })
        .then(res => this.displayArticles(res))
        .catch(err => console.log(err));
    }
  };

  // When this component mounts, grab the Article with the _id of this.props.match.params.id
  // e.g. localhost:3000/Articles/599dcb67f0f16317844583fc
  componentDidMount() {
    /*    API.getArticle(this.props.match.params.id)
          .then(res => this.setState({ Article: res.data }))
          .catch(err => console.log(err));*/
  }

  render() {
    return (
      <div>
            <Jumbotron>
              <h1>Article Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"/>
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year (optional)"/>
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year (optional)"/>
              <FormBtn
                disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                onClick={this.handleFormSubmit}>
                Search
              </FormBtn>
            </form>
            </div>
    );
  }
}

export default Search;