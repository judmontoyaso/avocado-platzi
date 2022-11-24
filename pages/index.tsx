import { useProduct } from "context/Produtcs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import ReactLoading from "react-loading";

export default function Home() {
  const [producList, setProducList] = useState([
    {
      name: "",
      price: 0,
      image: "",
      id: "",
      sku: "",
      attributes: { description: "", taste: "", hardiness: "", shape: "" },
      cantidad: 0,
    },
  ]);
  const [producto, setProducto] = useState([
    {
      name: "",
      price: 0,
      image: "",
      id: "",
      sku: "",
      attributes: { description: "", taste: "", hardiness: "", shape: "" },
      cantidad: 0,
    },
  ]);

  useEffect(() => {
    var cantidad = 0;
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, legth }) => {
        setProducList(data);
        setLoading(false);
      });

    var cantidad = 0;
  }, []);

  const [loading, setLoading] = useState(true);

  const add2: productContext[] = [];
  const [add, setAdd] = useState<productContext[]>(add2);

  const [context, setContext] = useProduct();

  const [sum, setSum] = useState(1);
  const [rest, setRest] = useState([{}]);

  console.log(add);
  setContext(add);

  useEffect(() => {}, []);

  const op = (i) => {
    producList[i].cantidad =
      producList[i].cantidad == undefined ? 1 : producList[i].cantidad + 1;
    console.log(producList[i].cantidad);

    // setRest([{product:producList[i]}])
    // cant = cant + 1;

    // // setAdd([{...add,  product: producList[i],cantidad: cant }])
    // console.log(producList[i].cantidad);
    // // setProducList([...producto[i], {name:cant}])
    // var can = add[i]?.cantidad + 1;

    setSum(sum + 1);
  };

  const opres = (i) => {
    producList[i].cantidad =
      !producList[i].cantidad == undefined
        ? 0
        : producList[i].cantidad == 0
        ? 0
        : producList[i].cantidad - 1;
    console.log(producList[i].cantidad);
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
        <div className="contenedor-cards">
          {producList.map((avo) => (
            <div>
              <Link key={avo.id} href={`product/${avo.id}`}>
                <div className="card-avo">
                  <div>
                    <div className="image-card-avo">
                      <Image
                        src={avo.image}
                        alt={`logo ${avo.name}`}
                        width={300}
                        height={300}
                      ></Image>
                    </div>
                  </div>
                  <div className="avo-name">{avo.name}</div>
                  <div className="avo-price">{avo.price}</div>
                </div>
              </Link>
              <input
                value={producList[producList.indexOf(avo)].cantidad}
              ></input>
              <button
                className="avo-price"
                onClick={() => {
                  op(producList.indexOf(avo));
                }}
              >
                +
              </button>
              <button
                className="avo-price"
                onClick={() => {
                  opres(producList.indexOf(avo));
                }}
              >
                -
              </button>
              <button
                className="avo-price"
                onClick={() => {
                  setAdd([
                    ...add,
                    {
                      producto: {
                        product: avo,
                        cantidad: producList[producList.indexOf(avo)].cantidad,
                      },
                    },
                  ]),
                    console.log(
                      add?.find(
                        (element) => (element.producto.product.id == "ewxsd6xb")
                      )
                    );
                }}
              >
                add
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
