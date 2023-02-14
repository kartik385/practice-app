import { View, Image } from "react-native";
import React from "react";

const Hero = () => {
  return (
    <View>
      <Image
        className="w-48 h-40 bg-white"
        source={{
          uri: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt935dd149b2617ac8/5db05fbcdc674266df3d5d36/RiotX_ChampionList_fiora.jpg?quality=90&width=250",
        }}
      />
    </View>
  );
};

export default Hero;
