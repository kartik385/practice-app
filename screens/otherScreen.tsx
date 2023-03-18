import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { InfoRouteProps, StackNavigation } from "../types/type";
import { AiringShow } from "../types/tmdb";
import { AntDesign } from "@expo/vector-icons";
import useFetchShow from "../hooks/useFetchShow";
import { Pokemon, useLog } from "../hooks/UseLog";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
const InfoScreen = () => {
  const route = useRoute<InfoRouteProps>();

  const params = route.params;

  const { data, isLoading, hasNextPage, fetchNextPage, isError } = useLog();

  if (isLoading || isError) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 w-full">
      {data && (
        <FlashList
          data={data.pages.map((page) => page).flat()}
          renderItem={pokemonCard}
          estimatedItemSize={40}
          contentContainerStyle={{
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={fetchNextPage}
          ListFooterComponent={
            hasNextPage ? (
              <View className="flex-1 items-center justify-center">
                <Text className="text-xl">Loading...</Text>
              </View>
            ) : null
          }
        />
      )}
    </View>
  );
};

const pokemonCard = ({ item }: ListRenderItemInfo<Pokemon>) => {
  return (
    <View className="flex-row items-center px-4 py-4 bg-white justify-between space-x-4 dark:bg-slate-800">
      <Text className="text-purple-800">{item.name}</Text>
    </View>
  );
};

export default InfoScreen;
