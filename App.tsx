import { Text, DripsyProvider, View } from "dripsy";
import { StatusBar } from "expo-status-bar";
import { View as MotiView } from "moti";
import React from "react";

export default function App() {
  return (
    <DripsyProvider
      theme={{
        colors: {
          primary: "green",
        },
      }}
    >
      <View
        sx={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MotiView
          animate={{ opacity: 1, translateY: 0 }}
          from={{ opacity: 0, translateY: -100 }}
        >
          <Text>Open up App.tsx to start working on your app!</Text>
        </MotiView>
        <StatusBar style="auto" />
      </View>
    </DripsyProvider>
  );
}
