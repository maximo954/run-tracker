import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/img/running1.png")}
      style={styles.container}
    >
      <Spacer>
        <Text style={styles.title}>Sign Up For Tracker</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        labelStyle={styles.label}
        placeholder="john@example.com"
        placeholderTextColor="#757575"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        errorStyle={{ color: "red" }}
        errorMessage=""
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.input}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        labelStyle={styles.label}
        placeholder="sample123"
        placeholderTextColor="#757575"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        errorStyle={{ color: "red" }}
        errorMessage=""
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.input}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Confirm Password"
        labelStyle={styles.label}
        placeholder="sample123"
        placeholderTextColor="#757575"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        errorStyle={{ color: "red" }}
        errorMessage=""
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.input}
      />
      <Spacer />
      <Button title="Sign Up" type="clear" titleStyle={styles.button} />
      <Button
        onPress={() => navigation.navigate("Signin")}
        title="Back To Sign In"
        type="clear"
        titleStyle={styles.button}
      />
    </ImageBackground>
  );
};

SignupScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    opacity: 0.95,
    flex: 1
  },
  title: {
    marginTop: 100,
    color: "white",
    textAlign: "center",
    marginBottom: 50,
    fontSize: 25
  },
  input: {
    marginHorizontal: 30
  },
  label: {
    marginHorizontal: 30,
    color: "white"
  },
  button: {
    color: "white",
  },
  inputStyle: {
    color: "white"
  }
});

export default SignupScreen;
