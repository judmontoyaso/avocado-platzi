import { createContext, useContext, useState } from "react";


export const ProductsListContext = createContext([])

export const useProductsList = () => {
  
  return useContext(ProductsListContext);
};