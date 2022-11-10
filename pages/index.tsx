import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [producList, setProducList] = useState([])

useEffect(() => {
  window.fetch('/api/avo').then(response => response.json()).then(({data, legth}) =>{
    setProducList(data)
  })
}, [])


  return (
    <>{
      producList.map((product) =>(
        <div>{product.name}</div>
      ))
    }</>
  )
}
