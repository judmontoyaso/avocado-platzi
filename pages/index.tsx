import { useCantidad } from "context/cantdad";
import { useProduct } from "context/Produtcs";
import { useProductsList } from "context/ProdutcsList";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import ReactLoading from "react-loading";

export default function Home() {
  const [contextList, setContextList] = useProductsList();
  console.log(contextList);

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

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, legth }) => {
        contextList.length != 1
          ? setProducList(contextList)
          : setContextList(data);
        setLoading(false);
      });

    setProducList(contextList);
  }, []);

  const [loading, setLoading] = useState(true);

  const add2: productContext[] = [];
  const [add, setAdd] = useState<productContext[]>([]);

  const [context, setContext] = useProduct();

  const [sum, setSum] = useState(1);
  const [rest, setRest] = useState([{}]);

  const [productos, setProductos] = useState(0);

  const [canti, setCanti] = useCantidad();
  const op = (i) => {
    producList[i].cantidad =
      producList[i].cantidad == undefined ? 1 : producList[i].cantidad + 1;

    setSum(sum + 1);
  };

  const opres = (i) => {
    producList[i].cantidad =
      !producList[i].cantidad == undefined
        ? 0
        : producList[i].cantidad == 0
        ? 0
        : producList[i].cantidad - 1;
  };

  const add3 = (avo) => {
    const search = add.find((element) => element?.product?.id === avo?.id);

    search == undefined
      ? setAdd([
          ...add,
          {
            product: avo,
            cantidad: producList[producList.indexOf(avo)]?.cantidad,
          },
        ])
      : (search.cantidad =
          producList[producList.indexOf(avo)]?.cantidad > 1 ? avo.cantidad : 0);
  };

  var product = 0;
  useEffect(() => {
    setContext(add);

    for (var i = 0; i < add?.length; i++) {
      product = product + add[i].cantidad;
    }

    setProductos(product);
    setCanti(product);

    return () => {
      canti;
    };
  }, [add]);

  return (
    <div className="contenedor">
      <div>
        <h2>Platzi Avo</h2>
      </div>
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
              <div className="card-avo">
                <Link key={avo.id} href={`product/${avo.id}`}>
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
                  <div className="avo-price">{`$ ${avo.price}`}</div>
                </Link>
                <div className="hr">
                  <hr></hr>
                </div>
                <div className="inputcontainer">
                  <div className="insmall">
                    <button
                      className="avo-price sum"
                      onClick={() => {
                        op(producList.indexOf(avo));
                      }}
                    >
                      <i className="pi pi-caret-up px-2"></i>
                    </button>
                    <input
                      className="inputcantidad"
                      disabled
                      value={
                        producList[producList.indexOf(avo)].cantidad > 0
                          ? producList[producList.indexOf(avo)].cantidad
                          : "-"
                      }
                    ></input>
                    <button
                      className="avo-price sum"
                      onClick={() => {
                        opres(producList.indexOf(avo));
                      }}
                    >
                      <i className="pi pi-caret-down px-2"></i>
                    </button>
                  </div>
                  <div>
                    <button
                      className=" boton-add"
                      onClick={() => {
                        add3(avo);
                      }}
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
