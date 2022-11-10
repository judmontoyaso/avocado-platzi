import React from "react";
import { useRouter } from "next/router";

 const ProductItem = () => {
const {
    query : {id},
} = useRouter();


  return <div>esta es la pagina del producto : {id}</div>;
};

export default ProductItem