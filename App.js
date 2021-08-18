import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Splash from "./screen/Splash";
import Header from "./screen/header";
import { Home, Login, Contact, Status, Calls } from "./screen";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLogin: false,
      data: [{}],
    };
  }
  onLogin = () => {
    this.setState({
      statusLogin: true,
    });
  };
  onLogout = (value) => {
    this.setState({
      statusLogin: value,
    });
    Alert.alert("LOGOUT SUCCESS");
  };
  render() {
    const { statusLogin } = this.state;
    return (
      <NavigationContainer>
        {statusLogin === false ? (
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
          <>
            <Header islogout={(value) => this.onLogout(value)} />
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Tab.Screen
                name="Chat"
                options={{
                  tabBarLabel: "Chat",
                  tabBarIcon: () => (
                    <Icon type="font-awesome" name="comments" size={25} />
                  ),
                }}
                children={(props) => <Home {...props} />}
              />
              <Tab.Screen
                name="Status"
                component={Status}
                options={{
                  tabBarLabel: "Status",
                  tabBarIcon: () => (
                    <Icon type="font-awesome" name="quote-right" size={25} />
                  ),
                }}
              />
              <Tab.Screen
                name="Calls"
                component={Calls}
                options={{
                  tabBarLabel: "Calls",
                  tabBarIcon: () => (
                    <Icon type="font-awesome" name="phone" size={25} />
                  ),
                }}
              />
            </Tab.Navigator>
          </>
        )}
      </NavigationContainer>
    );
  }
}
export default App;
