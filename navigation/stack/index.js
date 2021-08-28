import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Splash,
  Home,
  Login,
  Contact,
  ChatScreen,
  Counter,
} from "../../screen";
import { connect } from "react-redux";

const Stack = createNativeStackNavigator();
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="Splash"
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Counter"
          children={(props) => <Counter {...props} />}
        />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Login" children={(props) => <Login {...props} />} />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(`state login:`, state.Auth);
  return {
    users: state.Auth.listUser,
  };
};
const mapDispatchToProps = (dispatch) => ({
  doLogin: (dataLogin) => dispatch({ type: "LOGIN", payload: { dataLogin } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
