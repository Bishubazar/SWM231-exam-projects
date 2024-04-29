import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
// import { convertToCelsius, convertToFahrenheit } from "./utils/converter";

export default function Converter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  function convertToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius.toFixed(2) + " °C";
  }

  function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit.toFixed(2) + " °F";
  }

  return (
    <View className="items-center justify-center flex-1 w-64 mx-auto">
      {/* <Text>Градусаа бичнэ үү</Text> */}
      <View className="flex-row items-center w-full">
        <TextInput
          className="w-full p-3 text-xl text-center border-b-2 border-gray-500 rounded-md"
          placeholder="Enter Gradus"
          keyboardType="numeric"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        {/* <Text className="w-1/3 text-lg text-center">°C</Text> */}
      </View>
      <View className="flex-row justify-between w-full my-10">
        <CustomBtn
          value="Convert to °C"
          bg="bg-red-100"
          onPress={() => setOutputValue(convertToCelsius(inputValue))}
        />
        <CustomBtn
          value="Convert to °F"
          bg="bg-red-300"
          onPress={() => setOutputValue(convertToFahrenheit(inputValue))}
        />
      </View>

      <Text className="text-2xl font-bold">Result: {outputValue}</Text>
    </View>
  );
}

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
