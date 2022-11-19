import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [producList, setProducList] = useState([{ name: "", price: "" }]);

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
      {producList.map((avo) => (
        <div className="card-avo">
          <div></div>
          <div>{avo.name}</div>
          <div>{avo.price}</div>
        </div>
      ))}
    </>
  );
}
