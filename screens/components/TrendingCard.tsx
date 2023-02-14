import { Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { AiringShow } from "../../types/tmdb";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigation } from "../../types/type";
import { useNavigation } from "@react-navigation/native";
const TrendingCard = (props: AiringShow) => {
  const navigation = useNavigation<StackNavigation>();

  const goToDetails = () => {
    navigation.navigate("Info", props);
  };
  return (
    <TouchableOpacity onPress={goToDetails} className="mx-4 w-44 gap-1">
      <Image
        className="w-full h-28 rounded-md shadow-sm object-contain"
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${props.backdrop_path}`,
        }}
      />
      <View className="flex-row items-center">
        <Text className="font-semibold text-base flex-1  text-primary-Vblack">
          {props.name.length > 15
            ? props.name.substring(0, 15) + "..."
            : props.name}
        </Text>
        <View className="flex-row items-center space-x-1">
          <AntDesign name="star" size={14} color="#172b4d" />
          <Text className="text-primary-Vblack">
            {props.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
      <View>
        <Text className="text-xs text-gray-500">
          First Airing: {props.first_air_date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingCard;
