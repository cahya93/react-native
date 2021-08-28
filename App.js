import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./src/nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );
  }
}

export default App;
