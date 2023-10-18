import {
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
} from "react-native";
import React from "react";
import { CheckBadgeIcon } from "react-native-heroicons/solid";

var { width, height } = Dimensions.get("window");

export default function DatesCard({ item, handleClick }) {
  // console.log("Movie Image", item.poster_path);
  return (
    <View className="relative">
      <TouchableWithoutFeedback onPress={() => handleClick(item)}>
        <Image
          source={item.imgUrl}
          style={{
            width: width * 0.8,
            height: height * 0.65,
          }}
          resizeMode="cover"
          className="rounded-3xl"
        />

        {/* <Text>Hello</Text> */}
      </TouchableWithoutFeedback>

      <View className="absolute bottom-10 justify-start w-full items-start pl-4">
        <View className="flex-row justify-center items-center ">
          <Text className="text-2xl text-white font-bold">
            {item.name}
            {", "}
          </Text>
          <Text className="text-2xl text-white font-bold mr-2">{item.age}</Text>
          <CheckBadgeIcon size={25} />
        </View>

        {/* Location */}
        <View className="flex-row justify-center items-center ">
          <Text className="text-lg text-white font-medium">
            Brooklyn
            {", "}
          </Text>
          <Text className="text-lg text-white font-medium mr-2">NY</Text>
        </View>
      </View>
    </View>
  );
}
