import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="converter" options={{ headerShown: true }} />
        <Stack.Screen name="calculator" options={{ headerShown: true }} />
        <Stack.Screen name="todo" options={{ headerShown: true }} />
        <Stack.Screen name="quote" options={{ headerShown: true }} />
        <Stack.Screen name="cart" options={{ headerShown: true }} />
      </Stack>
    </>
  );
};

export default RootLayout;
