import { createContext, useContext, useState } from "react";


export const ProductsListContext = createContext<any[]>([])

export const useProductsList = () => {
  
  return useContext(ProductsListContext);
};