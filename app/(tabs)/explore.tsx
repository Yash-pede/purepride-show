import { ThemedText } from "@/components/ThemedText";
import { imageMap } from "@/constants/constants";
import { SelectedProductsContext } from "@/context/SelectedProductsContext";
import { useContext, useRef } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const { selectedProducts } = useContext(SelectedProductsContext)!;
  const flatListRef = useRef<FlatList>(null);
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={selectedProducts}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Image
              source={imageMap[item.id]}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyView}>
            <ThemedText>No products selected</ThemedText>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  emptyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
