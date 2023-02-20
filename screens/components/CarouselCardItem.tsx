import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Dimensions, Image, Pressable } from "react-native";
import { AiringShow, PopularShow } from "../../types/tmdb";
import { StackNavigation } from "../../types/type";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const CarouselCardItem = ({
  item,
  index,
}: {
  item: AiringShow | undefined;
  index: number;
}) => {
  // const navigation = useNavigation<StackNavigation>();
  // const goToDetails = () => {
  //   navigation.navigate("Info", item);
  // };
  return (
    <Pressable key={index}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
        }}
        className={`w-[${ITEM_WIDTH}px] h-72 object-cover`}
      />
    </Pressable>
  );
};

export default CarouselCardItem;
