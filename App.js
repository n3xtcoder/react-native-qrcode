import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Font } from "expo";

import DummyScreen from "./screens/DummyScreen";
import CheckInScreen from "./screens/CheckInScreen";

class FontContainer extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "trade-gothic": require("./assets/fonts/TradeGothicLTStd-Bold.otf")
    });

    this.setState({ fontLoaded: true });
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
      case 'CHECK-IN':
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
