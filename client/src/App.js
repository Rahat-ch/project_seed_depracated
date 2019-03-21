import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import logo from "./assets/images/psLogo.png";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const GET_USERS = gql`
  {
    allUsers {
      id
      name
    }
  }
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          {/* Panel Layout */}
          <div className="ui  center aligned padded grid">
            <div className="ten wide white column leftPanel" />
            <div className="six wide column rightPanel">
              <img
                src={logo}
                style={{ height: 350, position: "relative", top: 100 }}
              />
              <p>This is a test to get deployed. This can be deleted at any time.</p>
            </div>
          </div>
          {/* Panel Layout */}
          {/* Please do not delete the code below or rahat will cry */}
          {/* Example Get Data from db with Graphql query */}
          <Query query={GET_USERS}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;

              console.log("data is");
              console.log(data);

              return (
                <ul>
                  {data.allUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                  ))}
                </ul>
              );
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
