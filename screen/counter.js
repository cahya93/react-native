import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    this.setState({ count: this.props.counter });
  }
  render() {
    return (
      <View style={{ flex: 1, alignContent: "center", alignItems: "center" }}>
        <View>
          <Button title="tambah" onPress={this.props.tambah} />
        </View>
        <View>
          <Text>{this.state.count}</Text>
        </View>
        <View>
          <Button title="kurang" onPress={this.props.kurang} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(`state :`, state.counters);
  return {
    counter: state.counters,
  };
};
const mapDispatchToProps = (dispatch) => ({
  tambah: () => dispatch({ type: "INCREMENT" }),
  kurang: () => dispatch({ type: "DECREMENT" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(counter);
