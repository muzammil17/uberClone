import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOption from "../components/navOption";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
          style={{
            height: 100,
            width: 100,
            resizeMode: "contain",
          }}
        />

        <NavOption />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
