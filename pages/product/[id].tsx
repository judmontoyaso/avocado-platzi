import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import data from "../../database/data";
import Image from "next/image";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState(
    { name: "", price: "", image: "",id :'',attributes: {description:""},
    },
  );

  useEffect(() => {
    window
      .fetch(`/api/avo/${ id }`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  console.log(data);
  return(<div><div>{product?.name}</div> <Image
  src={product.image}
  alt={`logo ${product?.name}`}
  width={300}
  height={300}
></Image><div>{product.attributes.description}</div></div>) ;
};

export default ProductItem;
