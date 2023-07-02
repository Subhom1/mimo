import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles/styles";
import { singIn, singUp } from "../../funcs/signFuncs";

interface SignInProps {
  email: any;
  password: any;
  setLoading: (email: any) => void;
  setEmail: (email: any) => void;
  setPassword: (email: any) => void;
}

const Sign: React.FC<SignInProps> = ({
  email,
  password,
  setLoading,
  setEmail,
  setPassword,
}) => {
  return (
    <View style={styles.buttons}>
      <TouchableOpacity
        onPress={() =>
          singIn(email, password, setLoading, setEmail, setPassword)
        }
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          singUp(email, password, setLoading, setEmail, setPassword)
        }
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sign;
