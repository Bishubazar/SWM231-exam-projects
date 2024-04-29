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
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

export default function Todo() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="p-6">
        <Text className="text-xl font-semibold">Хийх ажлууд:</Text>
        <View className="flex-col">
          {taskItems.map((item, index) => {
            return (
              <Task
                key={index}
                text={item}
                complete={() => completeTask(index)}
              />
            );
          })}
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex flex-row justify-between m-6"
      >
        <TextInput
          placeholder="Юу хийх вэ?"
          className="border-2 rounded-md w-[250px] p-2"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <CustomBtn
          onPress={() => handleAddTask()}
          value="Нэмэх"
          bg="bg-blue-300"
        />
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Task = (props) => {
  const [check, setCheck] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setCheck(!check)}
      className={`rounded-md mt-3 ${check ? "bg-green-200" : "bg-red-100"}`}
    >
      <View className="flex flex-row items-center justify-between p-2 border-2 rounded-md shadow border-slate-700">
        <View className="flex flex-row items-center gap-2">
          <Text>{props.text}</Text>
        </View>
        <TouchableOpacity onPress={props.complete} className="w-[30px]">
          <Image
            source={require("../assets/filled-close.png")}
            className="object-cover w-full aspect-square"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const CustomBtn = ({ value, onPress, bg }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={` rounded-lg p-3 border-2 rounded-1 flex items-center justify-center ${bg}`}
      >
        <Text className="text-md">{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
