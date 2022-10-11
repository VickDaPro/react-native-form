import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import NativeStatusBarManager from "react-native/Libraries/Components/StatusBar/NativeStatusBarManagerAndroid";

import AppText from "../components/AppText";

function WelcomeScreen(props) {
  backgroundImage = require("../assets/background.jpg");
  logoImage = require("../assets/logo-red.png");
  return (
    <ImageBackground
      style={styles.backgound}
      source={backgroundImage}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logoImage} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.TextContainer}>
        <AppText style={styles.text}>Logged in Successfully!</AppText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgound: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  TextContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 450,
  },
  text: {
    fontSize: 30,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
