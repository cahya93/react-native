const defaultState = {
  counters: 0,
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

const auth = (state = defaultState, action) => {
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

    case "INCREMENT":
      return state.counters + 1;

    case "DECREMENT":
      return state.counters - 1;

    default:
      return state;
  }
};
export default auth;
