import React, { Component } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navbar from "./screen/navbar/navbar";
import Login from "./screen/login/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLogin: false,
    };
  }
  renderScreeen = () => {
    if (!this.state.statusLogin)
      return <Login isLogin={(e) => this.setState({ statusLogin: e })} />;
    if (this.state.statusLogin) return <Navbar />;
  };
  render() {
    return <SafeAreaProvider>{this.renderScreeen()}</SafeAreaProvider>;
  }
}

export default App;
