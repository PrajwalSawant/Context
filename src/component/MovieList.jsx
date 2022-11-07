import React, { Component } from "react";
import UserContext from "../context/userContext";
import MovieRow from "./MovieRow";
class MovieList extends Component {
  componentDidMount() {
    console.log("Context", this.context);
  }

  render() {
    return (
      <>
        <UserContext.Consumer>
          {(userContext) => (
            <h1>
              Movie List -{" "}
              {userContext.currentUser
                ? userContext.currentUser.name
                : "No User Found"}
              <br />
              <MovieRow />{" "}
            </h1>
          )}
        </UserContext.Consumer>
      </>
    );
  }
}

MovieList.contextType = UserContext;

export default MovieList;
