import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>TrackListScreen</Text>
      <Button title="Go To Signup" onPress={() => navigation.navigate("TrackDetail")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25
  }
});

export default TrackListScreen;
