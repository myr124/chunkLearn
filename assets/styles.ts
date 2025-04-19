import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1E1E1E",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 32,
    color: "#ffffff",
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    width: "auto",
    height: 75,
    justifyContent: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  input: {
    backgroundColor: "#1E1E1E",
    outlineColor: "#FEFEFE",
    borderColor: "rgba(254, 254, 254, 0.1)",
    borderWidth: 1,
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Inter",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    width: "auto",
    height: 75,
    justifyContent: "center",
  },
});
