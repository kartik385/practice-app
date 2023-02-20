import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigation } from "../types/type";
import { AiringShow } from "../types/tmdb";
import { AntDesign } from "@expo/vector-icons";

const InfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<StackNavigation>();
  const params: any = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View className="relative">
        <Image
          className="w-full h-60 shadow-sm object-cover"
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${params.backdrop_path}`,
          }}
        />
        <View className="absolute inset-x-0 top-8 flex-row px-4">
          <TouchableOpacity
            onPress={goBack}
            className="bg-white rounded-full p-3"
          >
            <AntDesign name="arrowleft" size={18} color="#172b4d" />
          </TouchableOpacity>
        </View>
      </View>
      <Text>OtherScreen</Text>
    </ScrollView>
  );
};

export default InfoScreen;
