import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async () => {
    let items = {
      email: email,
      password: password,
    };
    console.log(items);

    let result = await fetch("http://backend.jokester.co.in/sellerLogin", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log("Result", result);
    navigation.navigate("Home");
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoComplete={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.button}>
        <AppButton title="Login" onPress={onSubmit} />
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
});
