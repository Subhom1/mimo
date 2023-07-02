import { View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { styles } from "../../styles/styles";
import LoginForm from "../LoginForm/LoginForm";
import Sign from "../Sign/Sign";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      ></LoginForm>
      {loading ? (
        <ActivityIndicator size="large"></ActivityIndicator>
      ) : (
        <Sign
          email={email}
          password={password}
          setLoading={setLoading}
          setEmail={setEmail}
          setPassword={setPassword}
        ></Sign>
      )}
    </View>
  );
};

export default Login;
