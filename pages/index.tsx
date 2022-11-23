import { useProduct } from "context/Produtcs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import ReactLoading from "react-loading";



export default function Home() {

  const [producList, setProducList] = useState([
    { name: "", price: 0, image: "", id: "", sku: "" ,
    attributes: { description: "", taste: "", hardiness: "", shape: "" }, cantidad:0}
  ]);

  const [producto, setproducto] = useState(producList)

  useEffect(() => {
    window
    .fetch("/api/avo")
    .then((response) => response.json())
    .then(({ data, legth }) => {
      setProducList(data);
      setLoading(false);
      
      
    });
  }, []);

  console.log(producList)

  const [loading, setLoading] = useState(true);

  const add2: productContext[] = []

  
  const[context, setContext] = useProduct()
  
  
  const [sum, setSum] = useState(0)
  const [rest, setRest] = useState(0)
  
  
  
  
  
  const [add, setAdd] =  useState<productContext[]>(add2);
  useEffect(() =>{
  console.log(add)
  setContext(add)
}
)
let cant = 0

const op = (i) => {
cant = cant + 1
  setProducList([...producto[i], {name:cant}])
 var can = add[i]?.cantidad + 1

console.log(can)
}

const opres = () => {
  (cantida > 1) ? cantida - 1 : 0
}



  

    
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
                <input value={avo.cantidad}></input>
          

              </div>
            </Link>
                <button className="avo-price" onClick={()=>{op(producList.indexOf(avo))}}>+</button>
                <button className="avo-price"onClick={()=>{opres()}}>-</button>
                <button className="avo-price" onClick={() => {setAdd([...add, {product:avo, cantidad:10}])}}>add</button>
                </div>
          ))}
        </div>
      )}
    </>
  );
}
