import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    backgroundColor: "lightgray",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: "80%",
    padding: 10,
  },
  buttons: {
    gap: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    alignSelf: "center",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
  },
});
