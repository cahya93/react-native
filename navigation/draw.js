import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
class draw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          {/* <Drawer.Screen name="Feed" />
          <Drawer.Screen name="Article" /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default draw;
