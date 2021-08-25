import React, { Component } from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { SQLiteContext, SQLite3 } from "./config/sqlite";

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
  chatting: [
    {
      email: "user1@mail.com",
      chat: {
        id: 1,
        name: "user1",
        chat: "haloo",
        date: "18:01",
      },
    },
    {
      email: "user2@mail.com",
      chat: {
        id: 1,
        name: "user2",
        chat: "haloo",
        date: "18:01",
      },
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

class IndexApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <SQLiteContext.Provider value={new SQLite3()}>
          <App />
        </SQLiteContext.Provider>
      </Provider>
    );
  }
}

export default IndexApp;
