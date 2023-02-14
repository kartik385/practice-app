import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigation } from "../types/type";

import CarouselCards from "./components/CorouselCards";
import TrendingList from "./components/TrendingList";
import Constants from "expo-constants";
const Homescreen = () => {
  const apiUrl = Constants.expoConfig?.extra?.apiUrl;
  console.log(apiUrl);
  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 15,
        }}
      >
        <View className="flex-row items-center px-4 py-4 bg-white justify-between space-x-4 dark:bg-slate-800">
          <Image
            className="h-8 w-8 rounded-full shadow object-contain"
            source={{
              uri: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd30d85446d154070/5db05fc57d28b76cfe4397ef/RiotX_ChampionList_heimerdinger.jpg?quality=90&width=250",
            }}
          />
          <View className="flex-1">
            <TouchableOpacity className="p-3 rounded-full shadow-md border-2 border-primary-Vblack text-white">
              <Text className="text-gray-500 px-2">Search TV Shows...</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <CarouselCards />
        </View>
        <View>
          <TrendingList header="Airing Today" apiUrl="tv/airing_today" />
        </View>
        <View>
          <TrendingList header="Airing This week" apiUrl="tv/on_the_air" />
        </View>
        <View>
          <TrendingList header="Trending Today" apiUrl="trending/tv/day" />
        </View>
        <View>
          <TrendingList header="Trending This week" apiUrl="trending/tv/week" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
