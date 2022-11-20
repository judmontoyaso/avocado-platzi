import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [producList, setProducList] = useState([
    { name: "", price: "", image: "",id :'' },
  ]);

  const[loading, setLoading] = useState(true)

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, legth }) => {
        setProducList(data);setLoading(false)
      });
  }, []);

  return (
    <>{loading? 'espere':
      <div className="contenedor-cards">
        {producList.map((avo) => (
          <Link href={`product/${avo.id}`}>
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
          </div></Link>
        ))}
      </div>
    }</>
  );
}
