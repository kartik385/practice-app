import { View } from "react-native";
import React from "react";

const NoRowLoader = () => {
  return (
    <View className="w-full h-full">
      <View className="h-full">
        <View className="w-full h-full bg-gray-300 animate-pulse"></View>
      </View>
    </View>
  );
};

export default NoRowLoader;
