import React, { useContext } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { SelectedProductsContext } from "context/SelectedProductsContext";

const { width: viewportWidth } = Dimensions.get("window");

const ShowcaseScreen = () => {
  const { selectedProducts } = useContext(SelectedProductsContext)!;

  const renderItem = ({ item }: { item: { image: string } }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    );
  };

  return (
    <Carousel
      data={selectedProducts}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth}
      layout={"default"}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: viewportWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ShowcaseScreen;