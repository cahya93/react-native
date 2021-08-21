import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
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
      modalEdit: "",
      detail: "",
      id: "",
      name: "",
      email: "",
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

  renderItem = ({ item, idx }) => {
    return (
      <ListItem.Swipeable
        bottomDivider={true}
        onPress={() => this.props.navigation.navigate("ChatScreen")}
        leftContent={
          <Button
            title="Edit"
            icon={{ name: "edit", color: "white" }}
            buttonStyle={{ minHeight: "100%" }}
            onPress={() => this.modalEdit(true, item.id)}
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
    console.log("cek id", e);
    userDel.splice(e - 1, 1);
    this.setState({
      users: userDel,
    });
    Alert.alert("DELETED SUCCES");
  };
  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };
  modalDetail = (value, id) => {
    const { users } = this.state;
    const userDetail = users
      .filter((user) => user.id === id)
      .map((filterUser) => {
        return filterUser;
      });
    const detail = {
      id: userDetail[0]["id"],
      name: userDetail[0]["name"],
      email: userDetail[0]["email"],
    };
    console.log("cek detail", detail);
    this.setState({
      modalVisible: value,
      detail: detail,
    });
  };
  modalEdit = (value, id) => {
    const { users } = this.state;
    const userDetail = users
      .filter((user) => user.id === id)
      .map((filterUser) => {
        return filterUser;
      });
    const detail = {
      id: userDetail[0]["id"],
      name: userDetail[0]["name"],
      email: userDetail[0]["email"],
    };
    console.log("cek edit", detail);
    this.setState({
      modalEdit: value,
      id: detail.id,
      name: detail.name,
      email: detail.email,
    });
  };
  setEdit = () => {
    const { id, name, email } = this.state;
    const editData = {
      name: name,
      email: email,
    };
    console.log("cek save:", id);
    let userEdit = this.state.users;
    console.log("cek id", id);
    userEdit.splice(id - 1, 1, editData);
    this.setState({
      users: userEdit,
      modalEdit: false,
    });
    Alert.alert("EDIT SUCCES");
  };
  setModalVisible = (value) => {
    this.setState({
      modalVisible: value,
    });
  };
  setModalEdit = (value) => {
    this.setState({
      modalEdit: value,
    });
  };
  renderModalEdit = () => {
    const { modalEdit, id, name, email } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEdit}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setModalEdit(!modalEdit);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => this.setState({ name: value })}
              value={name}
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => this.setState({ email: value })}
              value={email}
            />
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setEdit()}
              >
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalEdit(!modalEdit)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
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
            <Text style={styles.modalText}>{"Name :" + detail.name}</Text>
            <Text style={styles.modalText}>{"Email :" + detail.email}</Text>
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
          </SpeedDial>
        </View>
        {this.renderModal()}
        {this.renderModalEdit()}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default contact;
