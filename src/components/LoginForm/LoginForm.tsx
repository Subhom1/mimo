import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "../../styles/styles";

interface LoginFormProps {
  email: any;
  password: any;
  setEmail: (email: any) => void;
  setPassword: (password: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
}) => {
  return (
    <>
      <TextInput
        value={email}
        style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        value={password}
        style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
    </>
  );
};

export default LoginForm;
