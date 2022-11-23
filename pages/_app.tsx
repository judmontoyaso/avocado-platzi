import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout'
import { ProductContext } from "../context/Produtcs";
import { useReducer, useState } from "react";





export default function App({ Component, pageProps }: AppProps) {

  const [add, setAdd] =  useState({});
  return (
<ProductContext.Provider value={ [add, setAdd]}>
  <Layout>
  <Component {...pageProps} />
  </Layout>
</ProductContext.Provider>
  )
}
