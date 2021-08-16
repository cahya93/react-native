import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Modal,
  FlatList,
  Pressable,
} from "react-native";
import { Button, Avatar, ListItem, SpeedDial } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from ".";

class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      refresh: false,
      limit: 15,
      page: 1,
      open: false,
      modalVisible: "",
      detail: "",
    };
  }
  getData = (page = 1) => {
    // console.log("page:", page);
    this.setState({
      refresh: true,
    });
    const { limit } = this.state;
    fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((users) => {
        let newData = [];
        if (page === 1) newData = users;
        else newData = [...this.state.users, ...users];

        this.setState({
          users: newData,
          page,
          refresh: false,
        });
      });
  };

  componentDidMount() {
    this.getData();
  }
  onPressListener = (item) => {
    const { navigation } = this.props;
    navigation.navigate("Home", item);
  };
  renderItem = ({ item, idx }) => {
    return (
      <ListItem.Swipeable
        onPress={() => this.setModalVisible(true, idx)}
        leftContent={
          <Button
            title="Edit"
            icon={{ name: "edit", color: "white" }}
            buttonStyle={{ minHeight: "100%" }}
            onPress={() => Alert.alert("INFO press")}
          />
        }
        rightContent={
          <Button
            title="Delete"
            icon={{ name: "delete", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
            onPress={() => this.delete(item.id)}
          />
        }
      >
        <Avatar
          size="medium"
          rounded
          title={item.name.substr(0, 1)}
          titleStyle={{
            flex: 1,
            color: "red",
            fontSize: 30,
            alignContent: "center",
            width: 100,
            height: 100,
            backgroundColor: "#12a6fc",
          }}
        />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Swipeable>
    );
  };
  delete = (e) => {
    let userDel = this.state.users;
    let id = e - 1;
    console.log("cek id", id);
    userDel.splice(id, 1);
    this.setState({
      users: userDel,
    });
  };
  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };
  setModalVisible = (value, item) => {
    console.log(item);
    this.setState({
      modalVisible: value,
      detail: item,
    });
  };

  renderModal = () => {
    const { modalVisible, detail } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{"Hello World!" + detail}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };
  render() {
    const { open } = this.state;
    return (
      <SafeAreaProvider>
        <Header />
        <View style={{ flex: 1 }}>
          <FlatList
            extraData={this.state}
            data={this.state.users}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={this.renderItem}
            onRefresh={() => this.getData(1)}
            refreshing={this.state.refresh}
            onEndReached={() => this.getData(this.state.page + 1)}
            onEndReachedThreshold={0.5}
          />

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
              onPress={() => Alert.alert("Add Something")}
            />
            {/* <SpeedDial.Action
              icon={{ name: "delete", color: "#fff" }}
              title="Delete"
              onPress={() => console.log("Delete Something")}
            /> */}
          </SpeedDial>
        </View>
        {this.renderModal()}
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    borderColor: "#12a6fc",
    borderRadius: 30,
    borderWidth: 1,
    width: 60,
    height: 60,
    color: "#fc1303",
    fontSize: 40,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
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
});
export default contact;
