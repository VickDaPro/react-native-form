import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const onSubmit = async () => {
    let items = {
      countrycode: "undefined",
      fName: name,
      jrmName: "undefined",
      jrmId: "undefined",
      lName: "undefined",
      mail: email,
      mobile: mobileNumber,
      mobile2: mobileNumber,
      password: password,
    };
    console.log(items);

    let result = await fetch("http://backend.jokester.co.in/sellerRege", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log("Result", result);
    navigation.navigate("Login");
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete={false}
        icon="account"
        placeholder="Full name"
        onChangeText={(text) => setName(text)}
      />
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
        autoComplete={false}
        icon="phone"
        keyboardType="numeric"
        placeholder="Mobile Number"
        onChangeText={(text) => setMobileNumber(text)}
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
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Confirm Password"
        secureTextEntry
        textContentType="password"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <View style={styles.button}>
        <AppButton title="Register" onPress={onSubmit} />
      </View>
    </Screen>
  );
};

export default RegisterScreen;

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
