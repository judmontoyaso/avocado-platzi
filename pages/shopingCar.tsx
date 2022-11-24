import React, { useEffect } from 'react'
import { ProductContext, useProduct } from 'context/Produtcs'
import { useProductsList } from 'context/ProdutcsList'


const shopingCar = () => {
    const [productos, setProductos] = useProduct()
    const [lista, setLista] = useProductsList()

  
 

  return (

    <div>

      {lista?.map((producto)=>(
        <>
    
       <div>{producto?.cantidad > 0 ? producto?.name : ''}</div>
        <div>{producto?.cantidad}</div>
    
        </>

        ))
        
        }
        
    </div>
  )
        }

        export default shopingCar
