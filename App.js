import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Login } from "./screen";

const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLogin: "",
    };
  }
  onLogin = (obj) => {
    this.setState({
      statusLogin: obj.username,
    });
  };
  renderScreeen = () => {
    if (!this.state.statusLogin)
      return <Login isLogin={(e) => this.setState({ statusLogin: e })} />;
    if (this.state.statusLogin) return <Home />;
  };
  render() {
    const { statusLogin } = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          {statusLogin === "" ? (
            <>
              <Stack.Screen
                name="Login"
                children={(props) => (
                  <Login {...props} doLogin={this.onLogin} />
                )}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="About">
                {(props) => <Home {...props} />}
              </Stack.Screen>
              <Stack.Screen
                name="Home"
                children={(props) => <Home {...props} />}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
