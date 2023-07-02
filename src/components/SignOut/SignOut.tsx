import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import { AUTH } from "../../config/firebase";

const SingOut: FC = () => {
  return (
    <TouchableOpacity
      onPress={() => AUTH.signOut()}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>Sign out</Text>
    </TouchableOpacity>
  );
};

export default SingOut;
