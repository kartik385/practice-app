import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";

import TrendingCard from "./TrendingCard";
import { AiringShow, ResponseObject } from "../../types/tmdb";
import { api } from "../../api/axios";
import NoRowLoader from "./NoRowLoader";

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

  const [data, setData] = React.useState<AiringShow[]>([]);

  const getAiring = async () => {
    try {
      const res = await api.get<ResponseObject>(`/${apiUrl}`);
      const { data } = res;
      const { results } = data;

      setData(results);
    } catch (err) {}
  };

  useEffect(() => {
    getAiring();
  }, []);

  if (data.length === 0) {
    return (
      <View>
        <Text className="font-bold text-xl px-4 pt-2 text-primary-Vblack ">
          {header}
        </Text>
        <FlatList
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
