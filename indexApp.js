import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import reducers from "./component/reducer";

const store = createStore(reducers);
class indexApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default indexApp;
