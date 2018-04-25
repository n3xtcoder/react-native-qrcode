import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class DummyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: "trade-gothic", fontSize: 30 }}>
          URBAN SPORTS CLUB
        </Text>
        <Text>N3xtcoder React Native Workshop</Text>
        <Text>Check-in App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
