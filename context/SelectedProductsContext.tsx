// SelectedProductsContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

// Define the type for a product
interface Product {
  id: number;
  name: string;
  image: string; // Adjust this type based on how you're importing images
}

// Define the context type
interface SelectedProductsContextType {
  selectedProducts: Product[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

// Create the context
export const SelectedProductsContext = createContext<SelectedProductsContextType | undefined>(undefined);

// Create a provider component
export const SelectedProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  return (
    <SelectedProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </SelectedProductsContext.Provider>
  );
};