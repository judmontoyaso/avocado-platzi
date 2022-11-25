import { createContext, useContext, useState } from "react";


export const ProductContext = createContext<any[]>([{...{
 product:{ name: "",
 price: 0,
 sku: "",
 image: "",
 id: "",
 attributes: { description: "", taste: "", hardiness: "", shape: "" }},
  cantidad:0
}}])

export const useProduct = () => {
  
  return useContext(ProductContext);
};