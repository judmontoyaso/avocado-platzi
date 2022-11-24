import { createContext, useContext, useState } from "react";


export const cantidadContext = createContext(0)

export const useCantidad = () => {
  
  return useContext(cantidadContext);
};