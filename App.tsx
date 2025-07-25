import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>Hola Jarry</Text>
      <Text style={styles.textHuge}>{count}</Text>
      <Pressable
        style={styles.floatingButton}
        onPress={() => setCount(count + 1)}
         onLongPress={() => setCount(0)}
      >
        <Text style={{ color: "white", fontSize: 25 }}>Pip + 1</Text>{" "}
      </Pressable>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textHuge: {
    fontSize: 60,
    fontWeight: "500",
  },

  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
});
