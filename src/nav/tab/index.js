import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, Order, Account } from "../../screen/home";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();
class tab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
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
            name="Search"
            component={Search}
            options={{
              tabBarLabel: "Search",
              tabBarIcon: () => (
                <Icon type="font-awesome" name="search" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Order"
            component={Order}
            options={{
              tabBarLabel: "Order",
              tabBarIcon: () => (
                <Icon type="font-awesome" name="cart-plus" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: "Account",
              tabBarIcon: () => (
                <Icon type="font-awesome" name="user" size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default tab;
