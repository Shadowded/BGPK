import React from "react";
import { StyleSheet, View, Text } from "react-native";

function App() {
  return (
    <View style={style.main}>
      <Text>Балдёжный РЕАКТ</Text>
    </View>
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;