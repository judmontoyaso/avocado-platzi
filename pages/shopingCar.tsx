import React, { useEffect } from "react";
import { ProductContext, useProduct } from "context/Produtcs";
import { useProductsList } from "context/ProdutcsList";
import Image from "next/image";

const ShopingCar = () => {
  const [productos, setProductos] = useProduct();
  const [lista, setLista] = useProductsList();

  return (
    <div className="contenedor">
      {lista?.map((producto :any) => (
        <>
          <div key={producto?.id} className="contenedor-venta">
            <div>
              <Image
                width={180}
                height={100}
                src={producto?.cantidad > 0 ? producto?.image : ""}
                hidden={producto?.cantidad > 0 ? false : true}
                alt='imagen'
              ></Image>
            </div>
            <div>{producto?.cantidad > 0 ? producto?.name : ""}</div>
            <div>{producto?.cantidad}</div>
            <div>
              {producto?.cantidad > 0
                ? `$ ${producto?.price * producto?.cantidad}`
                : ""}{" "}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ShopingCar;
