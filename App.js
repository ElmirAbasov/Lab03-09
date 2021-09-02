import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsList";
import FunctionContextComponenet from "./components/FunctionContext/FunctionContextComponent";
import { ThemeProvider } from "./components/FunctionContext/ThemeContext";
import Header from './components/Header'

export default function App() {
  return (
    
    
    <View style={styles.container}>
     
     <Header />
     <CarsList /> 
      <StatusBar style="auto" />
      <ThemeProvider>
      <FunctionContextComponenet />
      </ThemeProvider>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

// <CarItem
// name={"Model X"}
// tagLine={"Order Online For"}
// tagLineCTA={"Touchless Delivery"}
// image={require("./assets/images/Model3.jpeg")}
// />
