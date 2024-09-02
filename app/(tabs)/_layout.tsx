import { Tabs } from "expo-router";
import { Button, useTheme } from "tamagui";
import { Atom, AudioWaveform } from "@tamagui/lucide-icons";
import { SelectedProductsContext } from "context/SelectedProductsContext";
import { useContext } from "react";

export default function TabLayout() {
  const theme = useTheme();
  const { setSelectedProducts } = useContext(SelectedProductsContext)!;

  const resetSelections = () => {
    setSelectedProducts([]);
  };
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "All Products",
          tabBarIcon: ({ color }) => <Atom color={color} />,
          headerRight: () => (
            <Button
              mr="$4"
              bg="$purple8"
              color="$purple12"
              onPress={resetSelections}
            >
              Reset
            </Button>
          ),
        }}
      />
      <Tabs.Screen
        name="showcase"
        options={{
          title: "showcase",
          header: () => null,
          tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
        }}
      />
    </Tabs>
  );
}
