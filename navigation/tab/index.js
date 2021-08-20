import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Chat, Header, Status, Calls } from "../../screen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialTopTabNavigator();
class tab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
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
            children={(props) => <Chat {...props} />}
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
    );
  }
}

export default tab;
