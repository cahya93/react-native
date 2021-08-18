import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Modal,
  TextInput,
  Pressable,
  Alert,
  // CheckBox,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
// import { CheckBox } from "@react-native-community/checkbox";

import { Button, Avatar, ListItem, SpeedDial } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./header";

class todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: "",
      modalVisible: "",
      idx: "",
      title: "",
      description: "",
      data: [
        {
          id: "1",
          title: "First Item",
          description:
            "Description First Item Description First Item Description First Item Description First Item Description First Item Description First Item ",
          status: "",
        },
        {
          id: "2",
          title: "Second Item",
          description: "Description Second Item",
          status: true,
        },
        {
          id: "3",
          title: "Third Item",
          description: "Description Third Item",
          status: false,
        },
      ],
      open: false,
    };
  }
  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };
  handlerCheckbox = (idx, value) => {
    console.log("cek value", idx);
    let id = value.id;
    let title = value.title;
    let description = value.description;
    let status = !value.status;
    this.setState((prevState) => {
      const newUsers = prevState.data;
      newUsers.splice(idx - 1, 1, { id, title, description, status });
      return {
        data: newUsers,
      };
    });
  };
  renderItem = ({ item }, idx) => {
    return (
      <ListItem.Swipeable
        bottomDivider={true}
        // onLongPress={() => this.modalDetail(true, idx)}
        leftContent={
          <Button
            title="Edit"
            icon={{ name: "edit", color: "white" }}
            buttonStyle={{ minHeight: "100%" }}
            onPress={() =>
              this.setModalVisible(
                true,
                this.setState({
                  idx: item.id,
                  title: item.title,
                  description: item.description,
                })
              )
            }
          />
        }
        rightContent={
          <Button
            title="Delete"
            icon={{ name: "delete", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
            onPress={() => this.delete(idx)}
          />
        }
      >
        <View>
          <CheckBox
            value={item.status}
            onValueChange={() => this.handlerCheckbox(item.id, item)}
          />
        </View>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Swipeable>
    );
  };
  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };
  setModalVisible = (value) => {
    this.setState({
      modalVisible: value,
    });
  };
  handlerInput = () => {
    const { idx, title, description } = this.state;
    let id = this.state.data.length + 1;
    let status = false;
    if (idx === "")
      return this.setState((prevState) => ({
        data: [...prevState.data, { id, title, description, status }],
        title: "",
        description: "",
        open: "",
        modalVisible: "",
      }));
    return this.setState((prevState) => {
      const newTodo = prevState.data;
      newTodo.splice(idx - 1, 1, { id, title, description, status });
      return {
        data: newTodo,
        title: "",
        description: "",
        open: "",
        modalVisible: "",
      };
    });
  };
  delete = (e) => {
    let dataDel = this.state.data;
    console.log("cek id", e);
    dataDel.splice(e - 1, 1);
    this.setState({
      users: dataDel,
    });
    Alert.alert("DELETED SUCCES");
  };
  renderModal = () => {
    const { modalVisible, title, description, status } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setModalEdit(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Title"
              style={styles.input}
              onChangeText={(value) => this.setState({ title: value })}
              value={title}
            />
            <TextInput
              placeholder="Description"
              style={styles.input}
              onChangeText={(value) => this.setState({ description: value })}
              value={description}
            />
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.handlerInput()}
              >
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  addTodo = () => {};
  render() {
    const { open } = this.state;
    return (
      <SafeAreaProvider>
        <Header title={"Todo"} />
        <View style={{ flex: 1, backgroundColor: "yellow" }}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
          {this.renderModal()}
          <SpeedDial
            isOpen={open}
            icon={{ name: "edit", color: "#fff" }}
            openIcon={{ name: "close", color: "#fff" }}
            onOpen={() => this.setOpen(!open)}
            onClose={() => this.setOpen(!open)}
          >
            <SpeedDial.Action
              icon={{ name: "add", color: "#fff" }}
              title="Add"
              onPress={() => this.setModalVisible(true)}
            />
          </SpeedDial>
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#f9c2ff",
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  description: {
    fontSize: 15,
    padding: 2,
    marginVertical: 1,
    marginHorizontal: 1,
    color: "black",
  },
  titleChecked: {
    textDecorationLine: "line-through",
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  descriptionChecked: {
    textDecorationLine: "line-through",
    fontSize: 15,
    padding: 2,
    marginVertical: 1,
    marginHorizontal: 1,
    color: "green",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default todo;
