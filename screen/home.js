import React, { Component } from "react";

import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getRoutes = () => {
    const { route, navigation } = this.props;
    const routes = navigation.getState().routeNames;
    return Object.values(routes).filter((screen) => screen !== route.name);
  };
  componentDidMount() {
    console.log("Params:", this.props.route.params);
  }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <View>
            <Header
              leftComponent={{
                icon: "menu",
                color: "#fff",
                iconStyle: { color: "#fff" },
              }}
              centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
              rightComponent={{ icon: "home", color: "#fff" }}
            />
          </View>
          <View>
            {this.getRoutes().map((route) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(route, { payload: "ok" })}
                key={route}
                style={{
                  backgroundColor: "lightgrey",
                  padding: 10,
                  margin: 10,
                }}
              >
                <Text>{route}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

export default Home;
