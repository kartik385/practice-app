import React, { useEffect } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { PopularShow, ResponseObject } from "../../types/tmdb";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import { api } from "../../api/axios";
import NoRowLoader from "./NoRowLoader";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState<PopularShow[]>([]);

  const getTrnding = async () => {
    try {
      const res = await api.get<ResponseObject>("/tv/popular");
      const { data } = res;
      const { results } = data;
      const rendingShows: PopularShow[] = results.slice(0, 6);
      setData(rendingShows);
    } catch (err) {}
  };

  useEffect(() => {
    getTrnding();
  }, []);

  if (data.length === 0) {
    return (
      <View className="w-full h-72 bg-gray-300">
        <NoRowLoader />
      </View>
    );
  }

  return (
    <View className="relative">
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        autoplay={true}
        autoplayInterval={5000}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        vertical={false}
        onSnapToItem={(index) => setIndex(index)}
      />
      <View className="bg-yellow-400 absolute inset-x-0 bottom-0 bg-transparent">
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "#fff",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          animatedTension={300}
        />
      </View>
    </View>
  );
};

export default CarouselCards;
