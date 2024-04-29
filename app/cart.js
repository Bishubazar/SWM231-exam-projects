import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Button,
  Image,
} from "react-native";

export default function Todo() {
  return (
    <SafeAreaView className="flex-1">
      <View className="justify-center flex-1 p-5"></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
