import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CheckInScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "trade-gothic",
            fontSize: 30,
            textAlign: "center",
            marginLeft: 30,
            marginRight: 30
          }}
        >
          THIS WILL BE THE CHECK-IN SCREEN
        </Text>
        <Text>Happy developing :-)</Text>
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
