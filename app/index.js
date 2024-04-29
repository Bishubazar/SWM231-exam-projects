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

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <View className="justify-center flex-1 p-5">
        {/* <CustomBtn href={"/calculator"} value="Calculator App" /> */}
        <CustomBtn href={"/converter"} value="Хөрвүүлэгч App /Темп/" />
        <CustomBtn href={"/quote"} value="Ишлэл үүсгэх" />
        <CustomBtn href={"/todo"} value="To-do App" />
        <CustomBtn href={"/cart"} value="Худалдан авалтын жагсаалт" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const CustomBtn = ({ value, href, bg }) => {
  return (
    <TouchableOpacity
      className={`rounded-lg mb-4 border-2 rounded-1 flex items-center justify-center ${bg}`}
    >
      <Link className="p-3" href={href}>
        {value}
      </Link>
    </TouchableOpacity>
  );
};
