import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stak } from "./navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stak />
      </NavigationContainer>
    );
  }
}

export default App;
