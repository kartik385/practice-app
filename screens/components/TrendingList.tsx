import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";

import TrendingCard from "./TrendingCard";
import { AiringShow, ResponseObject } from "../../types/tmdb";

import NoRowLoader from "./NoRowLoader";
import useFetchShows from "../../hooks/useFetchShows";
import Animated, { SlideInLeft } from "react-native-reanimated";

const TrendingList = ({
  header,
  apiUrl,
}: {
  header: string;
  apiUrl: string;
}) => {
  const renderList = ({ item }: { item: AiringShow }) => {
    return <TrendingCard {...item} />;
  };

  const { isLoading, isError, data, error } = useFetchShows(apiUrl);

  if (isLoading) {
    return (
      <View>
        <Text className="font-bold text-xl px-4 pt-2 text-primary-Vblack ">
          {header}
        </Text>
        <Animated.FlatList
          entering={SlideInLeft.delay(1000)}
          data={[1, 2, 3, 4]}
          renderItem={(data) => (
            <View className="w-44 h-28 rounded-md shadow-sm mx-2  bg-gray-300">
              <NoRowLoader />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingTop: 15,
          }}
        />
      </View>
    );
  }

  return (
    <View>
      <Text className="font-bold text-xl px-4 pt-2 text-primary-Vblack ">
        {header}
      </Text>
      <FlatList
        data={data}
        renderItem={renderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: 15,
        }}
      />
    </View>
  );
};

export default TrendingList;
