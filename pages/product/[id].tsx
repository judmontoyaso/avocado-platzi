import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import data from "../../database/data";
import Image from "next/image";
import ReactLoading from "react-loading";


const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    sku: "",
    image: "",
    id: "",
    attributes: { description: "", taste: "", hardiness: "", shape: "" },
  });

  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(0);


  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);
  console.log(data);

  const sum = function () {
    setCount(count + 1);
  };
  const rest = function () {
    !(count < 1) ? setCount(count - 1) : setCount(0);
  };

  const add = function () {
    setProdtbuy([]);
  };
  return (
    <>
      {loading ? (
        <div className="container-loading">
          {" "}
          <ReactLoading
            type={"bubbles"}
            color={"rgb(19, 88, 10)"}
            height={600}
            width={130}
          />
        </div>
      ) : (
        <div className="contenedor-producto">
          <div className="contenedor-hijo-producto">
            <div className="contenedor-imagen-titulo">
              <Image
                src={product?.image}
                alt={`logo ${product?.name}`}
                width={300}
                height={300}
              ></Image>
              <div>
                <div>
                  <h2>{product?.name}</h2>
                </div>
                <div>{product?.sku}</div>
                <div>$ {product?.price}</div>
                <div>
                  <div>
                    <input value={count}></input>{" "}
                    <button onClick={sum}>Add</button>
                    <button onClick={rest}>rest</button>
                    <button onClick={add}>rest</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3> About this avocado</h3>
              <div>{product?.attributes.description}</div>
            </div>
            <div>
              <table>
                <th>Attributes</th>
                <tr>
                  <td>Taste</td>
                  <td>{product?.attributes.taste}</td>
                </tr>
                <tr>
                  <td>Hardiness</td>
                  <td>{product?.attributes.hardiness}</td>
                </tr>
                <tr>
                  <td>Shape</td>
                  <td>{product?.attributes.shape}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
