import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Font } from "expo";
import { getAccessToken, apiFetch } from "./api_utils";

import DummyScreen from "./screens/DummyScreen";
import CheckInScreen from "./screens/CheckInScreen";

const API_USERNAME = "test+mr@urbansportsclub.com";
const API_PASSWORD = "usc2012password";

class FontContainer extends React.Component {
  state = {
    fontLoaded: false,
    accessToken: null
  };

  async componentDidMount() {
    await Font.loadAsync({
      "trade-gothic": require("./assets/fonts/TradeGothicLTStd-Bold.otf")
    });

    this.setState({ fontLoaded: true });

    const accessToken = await getAccessToken(API_USERNAME, API_PASSWORD);
    this.setState({ accessToken });

    const venues = await apiFetch("/venues", accessToken);
    console.log("Venues", venues.length);
  }

  render() {
    return this.state.fontLoaded ? this.props.children : null;
  }
}

export default class App extends React.Component {
  state = {
    screen: "DUMMY"
  };

  renderScreen() {
    switch (this.state.screen) {
      case "CHECK-IN":
        return <CheckInScreen />;
      default:
        return <DummyScreen />;
    }
  }

  render() {
    return (
      <FontContainer>
        <View style={styles.container}>
          <View style={styles.container}>{this.renderScreen()}</View>
          <View
            style={{
              backgroundColor: "lightgrey",
              flexDirection: "row",
              height: 64
            }}
          >
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => {
                this.setState({ screen: "DUMMY" });
              }}
            >
              <Text>Venues</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => {
                this.setState({ screen: "DUMMY" });
              }}
            >
              <Text>Activities</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => {
                this.setState({ screen: "CHECK-IN" });
              }}
            >
              <Text>Check-In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => {
                this.setState({ screen: "DUMMY" });
              }}
            >
              <Text>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </FontContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
