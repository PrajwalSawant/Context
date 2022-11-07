import React, { Component } from "react";
import Login from "./component/login";
import MoviePage from "./component/MoviePage";
import UserContext from "./context/userContext";

class App extends Component {
  handleLoggIn = (userInfo) => {
    console.log("Getting username from a Form ", userInfo);
    const user = { name: "Rahul" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };
  render() {
    return (
      <>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggIn,
          }}>
          <MoviePage />
          <Login />
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
