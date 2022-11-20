import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [producList, setProducList] = useState([
    { name: "", price: "", image: "" },
  ]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, legth }) => {
        setProducList(data);
      });
  }, []);

  return (
    <>
      <div className="contenedor-cards">
        {producList.map((avo) => (
          <div className="card-avo">
            <div>
              <Image
                src={avo.image}
                alt={`logo ${avo.name}`}
                width={300}
                height={300}
              ></Image>
            </div>
            <div>{avo.name}</div>
            <div>{avo.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}
