import { products } from "@/constants/constants";
import { Product } from "@/constants/type";
import { SelectedProductsContext } from "@/context/SelectedProductsContext";
import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


const TabOneScreen = () => {
    const { selectedProducts, setSelectedProducts }  = useContext(
    SelectedProductsContext
  )!;

  const toggleProduct = (product: Product) => {
    const alreadySelected = selectedProducts.some((p) => p.id === product.id);
    if (alreadySelected) {
      setSelectedProducts((prev: Product[]) => prev.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts((prev: Product[]) => [...prev, product]);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ScrollView contentContainerStyle={{ padding: 8 }}>
        <View style={styles.grid}>
          {products.map((product: Product) => (
            <ProductButton
              key={product.id}
              product={product}
              isSelected={selectedProducts.some((p) => p.id === product.id)}
              onSelect={toggleProduct}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const ProductButton = ({
  product,
  isSelected,
  onSelect,
}: {
  product: Product;
  isSelected: boolean;
  onSelect: (product: Product) => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.buttonSelected]}
      onPress={() => onSelect(product)}
      activeOpacity={0.7}
    >
      <Text
        style={[styles.buttonText, isSelected && styles.buttonTextSelected]}
      >
        {product.name.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#e0e0e0",
    width: "48%",
  },
  buttonSelected: {
    backgroundColor: "#222", // or add your theme color
  },
  buttonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  buttonTextSelected: {
    color: "#fff",
  },
});

export default TabOneScreen;
