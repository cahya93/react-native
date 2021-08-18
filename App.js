import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Splash from "./screen/Splash";
import { Home, Login, Contact, Todo } from "./screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLogin: true,
    };
  }
  onLogin = () => {
    this.setState({
      statusLogin: true,
    });
  };

  render() {
    const { statusLogin } = this.state;
    return (
      <NavigationContainer>
        {statusLogin === "" ? (
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Splash"
          >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen
              name="Login"
              children={(props) => <Login {...props} doLogin={this.onLogin} />}
            />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "#0dff00",
            }}
          >
            <Tab.Screen
              name="Home"
              options={{
                tabBarLabel: "Home",
                tabBarIcon: () => (
                  <Icon type="font-awesome" name="home" size={25} />
                ),
              }}
              children={(props) => <Home {...props} />}
            />
            <Tab.Screen
              name="Contact"
              component={Contact}
              options={{
                tabBarLabel: "Contact",
                tabBarIcon: () => (
                  <Icon type="font-awesome" name="address-book" size={25} />
                ),
              }}
            />
            <Tab.Screen
              name="Todo"
              component={Todo}
              options={{
                tabBarLabel: "Todo",
                tabBarIcon: () => (
                  <Icon type="font-awesome" name="list" size={25} />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    );
  }
}
export default App;
