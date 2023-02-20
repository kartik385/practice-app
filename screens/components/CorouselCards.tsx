import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import { api } from "../../api/axios";
import NoRowLoader from "./NoRowLoader";
import useFetchShows from "../../hooks/useFetchShows";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  const { isLoading, isError, data, error } = useFetchShows("tv/popular");

  if (isLoading || isError) {
    return (
      <View className="w-full h-72 bg-gray-300">
        <NoRowLoader />
      </View>
    );
  }

  return (
    data && (
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
            dotsLength={data?.length || 0}
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
    )
  );
};

export default CarouselCards;
