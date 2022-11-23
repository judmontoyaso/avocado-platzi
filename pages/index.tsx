import { useProduct } from "context/Produtcs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import ReactLoading from "react-loading";

export default function Home() {
  const [producList, setProducList] = useState([
    { name: "", price: "", image: "", id: 0 },
  ]);

  const [loading, setLoading] = useState(true);

  const [av, setAv] = useState()

  const [add, setAdd] =  useState([]);


useEffect(() =>{
  console.log(add)
}
)



  useEffect(() => {
    window
    .fetch("/api/avo")
    .then((response) => response.json())
    .then(({ data, legth }) => {
      setProducList(data);
      setLoading(false);
      
    });
  }, []);
  

    
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
                <button className="avo-price" onClick={() => {setAdd([...add, {avo}])}}>add</button>
                </div>
          ))}
        </div>
      )}
    </>
  );
}
