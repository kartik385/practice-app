import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { InfoRouteProps, StackNavigation } from "../types/type";
import { AiringShow } from "../types/tmdb";
import { AntDesign } from "@expo/vector-icons";
import useFetchShow from "../hooks/useFetchShow";

const InfoScreen = () => {
  const route = useRoute<InfoRouteProps>();
  const navigation = useNavigation<StackNavigation>();
  const params = route.params;

  const { isLoading, isError, data, error } = useFetchShow(params.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  if (isLoading || isError) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
