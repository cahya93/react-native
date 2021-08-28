import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from "react-native-fbsdk";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {} };
  }
  getInfoFromToken = (token) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: "id, name,  first_name, last_name",
      },
    };
    const profileRequest = new GraphRequest(
      "/me",
      { token, parameters: PROFILE_REQUEST_PARAMS },

      (error, result) => {
        console.log("token", token);
        if (error) {
          console.log("login info has error: " + error);
        } else {
          this.props.navigation.replace("Home");
          this.setState({ userInfo: result });
          console.log("result:", result);
        }
      }
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };
  onSubmit = () => {
    const { email, password } = this.state;
    const listUser = this.props.users;
    let dataLogin = {
      email: email,
      password: password,
    };
    for (let i = 0; i < listUser.length; i++) {
      if (
        email === listUser[i]["email"] &&
        password === listUser[i]["password"]
      ) {
        this.setState({
          email: "",
          password: "",
        });
        // console.log(`login sukses :`);
        this.props.navigation.replace("Home");
        this.props.doLogin(dataLogin);
        return Alert.alert("Okey", "Login success");
      }
    }
    return Alert.alert("Ops!", "email / password is wrong");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: "https://img.icons8.com/nolan/40/000000/email.png",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(value) => this.setState({ email: value })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: "https://img.icons8.com/nolan/40/000000/key.png",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(value) => this.setState({ password: value })}
          />
        </View>

        <TouchableOpacity style={styles.restoreButtonContainer}>
          <Text>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.onSubmit}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.buttonContainer}>
          <Text>Register</Text>
        </TouchableOpacity> */}
        <View style={styles.continerOr}>
          <View style={styles.lineOr}></View>
          <Text>OR</Text>
          <View style={styles.lineOr}></View>
        </View>
        <View>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  const accessToken = data.accessToken.toString();
                  this.getInfoFromToken(accessToken);
                });
              }
            }}
            onLogoutFinished={() => this.setState({ userInfo: {} })}
          />
          {this.state.userInfo.name && (
            <Text style={{ fontSize: 16, marginVertical: 16 }}>
              Logged in As {this.state.userInfo.name}
            </Text>
          )}
        </View>

        {/* <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
          <View style={styles.socialButtonContent}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://seeklogo.com/images/G/google-logo-71A6AE6011-seeklogo.com.png",
              }}
            />
            <Text style={styles.loginText}>Sign in with google</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0E0E6",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 200,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    fontWeight: "bold",
    color: "white",
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: "flex-end",
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    color: "#FFFFFF",
    marginRight: 5,
  },
  continerOr: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lineOr: {
    borderWidth: 0.5,
    borderColor: "grey",
    width: "45%",
    height: 1,
  },
});
const mapStateToProps = (state) => {
  console.log(`state login:`, state.Auth);
  return {
    users: state.Auth.listUser,
  };
};
const mapDispatchToProps = (dispatch) => ({
  doLogin: (dataLogin) => dispatch({ type: "LOGIN", payload: { dataLogin } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
