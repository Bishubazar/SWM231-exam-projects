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

const btnValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Calculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [total, setTotal] = useState(0);
  const [focus, setFocus] = useState(1);

  const plus = () => {
    setTotal(parseFloat(first) + parseFloat(second));
  };
  const subtract = () => {
    setTotal(parseFloat(first) - parseFloat(second));
  };
  const multiply = () => {
    setTotal(parseFloat(first) * parseFloat(second));
  };
  const divide = () => {
    setTotal(parseFloat(first) / parseFloat(second));
  };

  const renderButtonRow = (row, rowIndex) => {
    return (
      <View key={rowIndex} style={{ flexDirection: "row" }}>
        {row.map((btn, index) => (
          <CustomBtn
            key={index}
            onPress={() => handleButtonPress(btn)}
            value={btn}
          />
        ))}
      </View>
    );
  };

  console.log(focus + "-р Input ажиллаж байна");
  console.log("1-р тоо: " + first);
  console.log("2-р тоо: " + second);

  console.log(total);

  return (
    <SafeAreaView className="flex-1">
      <View className="justify-center flex-1 gap-6 p-4">
        <TextInput
          placeholder="Эхний тоо"
          className="p-3 border border-gray-400"
          value={first}
          onPressIn={() => setFocus(1)}
          onChangeText={(e) => setFirst(e)}
          clearButtonMode="while-editing"
        />

        <TextInput
          placeholder="Хоёр дахь тоо"
          className="p-3 border border-gray-400"
          value={second}
          onPressIn={() => setFocus(2)}
          onChangeText={(e) => setSecond(e)}
          clearButtonMode="while-editing"
        />

        <View className="flex-col">
          <View className="flex-row justify-around mb-3">
            {btnValues.slice(0, 5).map((item) => {
              return (
                <View key={item}>
                  <CustomBtn
                    onPress={() => [
                      focus === 1
                        ? setFirst(first + item)
                        : setSecond(second + item),
                    ]}
                    value={item}
                  />
                </View>
              );
            })}
          </View>
          <View className="flex-row justify-around">
            {btnValues.slice(5, 10).map((item) => {
              return (
                <View key={item}>
                  <CustomBtn
                    onPress={() => [
                      focus === 1
                        ? setFirst(first + item)
                        : setSecond(second + item),
                    ]}
                    value={item}
                  />
                </View>
              );
            })}
          </View>
        </View>

        <View className="flex flex-row justify-around">
          <CustomBtn
            onPress={() => [
              focus === 1 ? setFirst(first + ".") : setSecond(second + "."),
            ]}
            value={"."}
          />
          <CustomBtn onPress={plus} bg="bg-red-200" value="+" />
          <CustomBtn onPress={subtract} bg="bg-red-200" value="-" />
          <CustomBtn onPress={multiply} bg="bg-red-400" value="X" />
          <CustomBtn onPress={divide} bg="bg-red-400" value="/" />
        </View>

        <View className="p-2 pt-10">
          <Text className="text-xl font-semibold">Result: </Text>
          {/*   <Text>Хоёр дахь тоо: {second}</Text> */}
          <Text className="text-[40px] font-semibold ">
            {/* {parseFloat(total).toPrecision(3)} */}
            {total === 0 ? " " : parseFloat(total).toFixed(3)}
          </Text>
        </View>

        {/* {btnValues.map((row, index) => renderButtonRow(row, index))} */}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const CustomBtn = ({ value, onPress, bg }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`aspect-square rounded-lg p-3 border-2 rounded-1 flex items-center justify-center ${bg}`}
      >
        <Text className="text-xl">{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
