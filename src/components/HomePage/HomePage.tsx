import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RouterProps } from "../../types/types";
import { AUTH } from "../../config/firebase";
import { styles } from "../../styles/styles";
import SingOut from "../SignOut/SignOut";

const HomePage: FC<RouterProps> = ({ navigation }: RouterProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 30 }}>You are logged in!</Text>
      <SingOut></SingOut>
    </View>
  );
};

export default HomePage;
