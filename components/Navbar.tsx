import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import Link from "next/link";
import { useProduct } from "context/Produtcs";

import { useProductsList } from "context/ProdutcsList";

const Navbar = () => {
  const [context, setContext] = useProduct();
  const [productos, setProductos] = useState(0);
 
  const [lista, setLista] = useProductsList();

  console.log(lista);
  console.log(context);
  // console.log(context[0]?.length)

  let con = {};

  let product = 0;
  useEffect(() => {
    for (let i = 0; i < lista.length; i++) {
      product += lista[i].cantidad != undefined ? lista[i]?.cantidad : 0;

      setProductos(product);
    }
  }, [context]);

  const end = (
    <Link href={"/shopingCar"}>
      <div className="button-demo">
        <div className="template">
          <Button className="vimeo p-0" aria-label="Vimeo">
            <i className="pi pi-shopping-cart px-2"></i>
            <span className="px-3">Canasta</span>
            <div className="px-3 number">{productos}</div>
          </Button>
        </div>
      </div>
    </Link>
  );
  const start = <InputText placeholder="Search" hidden type="text" />;

  return (
    <div className="navbar">
      <div className="card">
        {start}
        <div>
          <Link className="enlacecentral" href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="37.000000pt"
              height="37.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#44835b"
                stroke="none"
              >
                <path d="M2415 5108 c-52 -18 -96 -59 -121 -112 -21 -45 -24 -65 -24 -182 l0 -131 -42 -12 c-72 -21 -248 -118 -343 -189 -49 -36 -132 -107 -182 -156 -79 -76 -93 -94 -93 -121 0 -39 35 -75 73 -75 20 0 50 21 115 82 400 374 769 459 1157 267 293 -145 665 -539 895 -947 327 -582 535 -1414 479 -1920 -34 -314 -128 -554 -328 -841 -37 -53 -38 -71 -8 -107 26 -30 76 -36 103 -13 32 27 165 239 213 339 162 342 213 698 161 1107 -72 561 -267 1139 -536 1590 -170 285 -465 621 -699 796 -92 68 -270 166 -344 188 l-41 12 0 131 c0 117 -3 137 -24 182 -25 54 -69 94 -125 113 -42 14 -245 13 -286 -1z m260 -163 c23 -22 25 -31 25 -122 l0 -98 -140 0 -140 0 0 98 c0 91 2 100 25 122 22 23 32 25 115 25 83 0 93 -2 115 -25z" />
                <path d="M2463 4155 c-132 -36 -261 -123 -418 -280 -204 -205 -357 -420 -485 -680 -182 -371 -306 -789 -356 -1195 -35 -289 6 -551 123 -785 125 -247 335 -444 575 -539 332 -131 818 -147 1195 -41 448 127 766 519 824 1018 48 414 -152 1187 -434 1682 -191 333 -481 652 -696 764 -131 68 -223 84 -328 56z m174 -153 c219 -68 574 -454 767 -832 191 -374 325 -832 367 -1250 28 -289 -52 -587 -215 -798 -223 -290 -545 -412 -1051 -399 -410 11 -661 101 -861 308 -225 234 -328 548 -294 894 50 513 247 1093 500 1472 199 298 453 543 626 602 73 25 88 26 161 3z" />
                <path d="M2013 2880 c-33 -13 -43 -42 -43 -124 0 -89 17 -116 74 -116 54 0 76 36 76 121 0 56 -4 72 -22 93 -27 29 -55 38 -85 26z" />
                <path d="M3054 2880 c-39 -15 -54 -49 -54 -121 0 -83 23 -119 76 -119 57 0 74 26 74 119 0 61 -4 83 -17 99 -22 25 -51 33 -79 22z" />
                <path d="M2375 2765 c-39 -39 -33 -76 19 -122 97 -85 234 -86 330 -2 56 50 63 94 20 128 -36 29 -65 26 -109 -9 -27 -21 -49 -30 -75 -30 -26 0 -48 9 -75 30 -46 36 -78 38 -110 5z" />
                <path d="M2470 2140 c-267 -50 -460 -278 -460 -545 0 -331 293 -590 620 -547 319 43 534 348 469 664 -39 189 -195 355 -388 414 -59 18 -183 25 -241 14z m263 -188 c84 -41 166 -129 198 -209 32 -82 32 -214 0 -296 -32 -81 -114 -168 -199 -209 -62 -31 -73 -33 -172 -33 -99 0 -110 2 -172 33 -240 118 -299 424 -121 623 86 94 173 130 309 126 79 -2 100 -7 157 -35z" />
                <path d="M1427 4013 c-24 -6 -160 -190 -242 -328 -381 -638 -615 -1561 -540 -2127 97 -738 583 -1301 1275 -1478 449 -115 977 -101 1405 37 164 53 404 182 508 272 45 40 50 85 14 119 -35 33 -68 27 -138 -24 -283 -209 -580 -301 -1059 -329 -125 -8 -360 9 -520 36 -386 66 -672 213 -914 470 -330 350 -482 848 -421 1374 78 667 352 1394 687 1818 60 77 62 124 8 152 -30 16 -33 16 -63 8z" />
              </g>
            </svg>
            <div className="titulo"> Avo Store</div>
          </Link>
        </div>
        {end}
      </div>
    </div>
  );
};

export default Navbar;
