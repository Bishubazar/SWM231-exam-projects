import { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from "expo-clipboard";

export default function Quote() {
  const [quotes, setQuotes] = useState("");
  const [copiedText, setCopiedText] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  const copyClipboard = async () => {
    await Clipboard.setStringAsync(quotes.text);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <View className="items-center justify-center flex-1 p-5 bg-blue-400">
      <View className="flex-col w-full p-8 my-auto bg-white shadow-md rounded-xl">
        <Text className="text-2xl font-semibold text-center text-slate-800">
          Үүсгэсэн ишлэл
        </Text>
        <Text className="my-5 text-2xl font-extrabold text-center">
          "<Text className="text-xl font-normal"> {quotes.text}</Text>"
        </Text>

        <Text className="italic text-right text-md font-regular">
          --- {quotes.author}
        </Text>
        <View className="h-[1px] w-full bg-blue-900/90 my-6"></View>
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => [Alert.alert("Ишлэлийг хуулсан"), copyClipboard]}
          >
            <View
              className={` p-1 border-2 rounded-full overflow-hidden  border-blue-900 flex items-center justify-center`}
            >
              <Image
                source={require("../assets/copy.png")}
                className="h-[30px] aspect-square rounded-full"
              />
            </View>
          </TouchableOpacity>

          <CustomBtn bg="bg-blue-400 " onPress={getQuote} value="Ишлэл" />

          {/* <CustomBtn
            bg="bg-blue-400 "
            onPress={fetchCopiedText}
            value="paste"
          /> */}
        </View>
      </View>
    </View>
  );
}

const CustomBtn = ({ value, onPress, bg }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`rounded-lg p-3 border-2 border-blue-900 rounded-1 flex items-center justify-center ${bg}`}
      >
        <Text className="font-bold text-md">{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
