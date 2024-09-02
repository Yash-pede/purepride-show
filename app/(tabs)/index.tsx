import { Activity } from "@tamagui/lucide-icons";
import { products } from "constants/constants";
import { SelectedProductsContext } from "context/SelectedProductsContext";
import { useContext } from "react";
import { Button, ScrollView, XStack, YStack } from "tamagui";

const TabOneScreen = () => {
  const { selectedProducts, setSelectedProducts } = useContext(
    SelectedProductsContext
  )!;

  const toggleProduct = (product: Product) => {
    const alreadySelected = selectedProducts.some((p) => p.id === product.id);
    if (alreadySelected) {
      setSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts((prev) => [...prev, product]);
    }
  };

  return (
    <YStack flex={1} padding="$4" space>
      <ScrollView
        width="100%"
        backgroundColor="$background"
        padding="$4"
        borderRadius="$4"
        flex={1}
      >
        <YStack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {products.map((product) => (
            <ProductButton
              key={product.id}
              product={product}
              isSelected={selectedProducts.some((p) => p.id === product.id)}
              onSelect={toggleProduct}
            />
          ))}
        </YStack>
      </ScrollView>
    </YStack>
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
    <XStack width="48%" marginBottom="$2" space>
      <Button
        themeInverse={isSelected}
        padding="$1"
        size="$6"
        textProps={{ size: "$5", textTransform: "uppercase" }}
        onPress={() => onSelect(product)}
        flex={1}
      >
        {product.name}
      </Button>
    </XStack>
  );
};

export default TabOneScreen;
