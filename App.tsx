import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login/Login";
import HomePage from "./src/components/HomePage/HomePage";
import { User, onAuthStateChanged } from "firebase/auth";
import { AUTH } from "./src/config/firebase";
import Loading from "./src/components/Loading/Loading";

const Stack = createStackNavigator();

const insideStack = createStackNavigator();

const loadingStack = createStackNavigator();

function LoadingLayout() {
  return (
    <loadingStack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
    </loadingStack.Navigator>
  );
}

function InsideLayout() {
  return (
    <insideStack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </insideStack.Navigator>
  );
}

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (AUTH !== undefined) {
      onAuthStateChanged(AUTH, (user) => {
        setUser(user);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="LoadingLayout"
            component={LoadingLayout}
            options={{ headerShown: false }}
          />
        ) : user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
