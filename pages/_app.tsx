import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout'
import { ProductContext } from "../context/Produtcs";
import { cantidadContext } from "../context/cantdad";
import { ProductsListContext } from "../context/ProdutcsList";


import { useReducer, useState } from "react";





export default function App({ Component, pageProps }: AppProps) {

  const [add, setAdd] =  useState<productContext[]>();
  const [cantidad, setCantidad] =  useState(0);
  const [productos, setproductos] =  useState([{}]);


  return (
<ProductsListContext.Provider value={[productos, setproductos] }>

<ProductContext.Provider value={[add, setAdd] }>
<cantidadContext.Provider value={[cantidad, setCantidad] }>

  <Layout>
  <Component {...pageProps} />
  </Layout>
</cantidadContext.Provider>

</ProductContext.Provider>
</ProductsListContext.Provider>

  )
}
