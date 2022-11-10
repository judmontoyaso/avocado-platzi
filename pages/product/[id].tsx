import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import data from "../../database/data";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window
      .fetch(`/api/avo/${ id }`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  console.log(data);
  return <div>{product?.name}</div>;
};

export default ProductItem;
