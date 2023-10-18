import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousal from "react-native-snap-carousel";
import DatesCard from "../components/DatesCard";
import { datesData } from "../constant";
import {
  BellIcon,
  ChevronLeftIcon,
  HeartIcon,
} from "react-native-heroicons/outline";
import { user1 } from "../../assets/images";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="bg-white">
      {/* Carousal */}

      {/* Header */}
      <View className="w-full flex-row justify-between items-center px-4 mb-8">
        <View className="rounded-full items-center justify-center">
          <Image
            source={user1}
            style={{
              width: hp(4.5),
              height: hp(4.5),
              resizeMode: "cover",
            }}
            className="rounded-full"
          />
        </View>

        <View>
          <Text className="text-2xl font-semibold text-center">Dates</Text>
        </View>

        {/* Heart Icon */}
        <View className="bg-black/10 p-2 rounded-full items-center justify-center">
          <TouchableOpacity>
            <BellIcon size={25} strokeWidth={2} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mx-4 mb-4">
        <Text className="capitalize text-2xl font-semibold">
          Find your love
        </Text>
      </View>

      <Carousal
        data={datesData}
        renderItem={({ item }) => <DatesCard item={item} />}
        firstItem={1}
        inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.8}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </SafeAreaView>
  );
}
