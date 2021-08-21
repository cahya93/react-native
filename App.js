import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Stak } from "./navigation";

const defaultState = {
  statusLogin: false,
  dataLogin: [],
  listUser: [
    {
      id: 1,
      email: "user1@mail.com",
      password: "12345",
      name: "user1",
      chat: "haloo",
      date: "18:01",
    },
    {
      id: 2,
      email: "user2@mail.com",
      password: "12345",
      name: "user2",
      chat: "haloo",
      date: "18:01",
    },
  ],
};
const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  console.log("state reducer:", state);
  console.log("type reducer:", type);
  console.log("payload reducer:", payload);

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        statusLogin: true,
        dataLogin: payload.dataLogin,
      };
      break;

    default:
      return state;
  }
};
const store = createStore(reducer);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stak />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
