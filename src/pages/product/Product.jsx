import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom"

import classes from "./product.module.css"

const Product = () => {

  const params = useParams();
  const [productData, setProductData] = useState({})
  const [loading, setLoading] = useState(false);

  const fetchProductData = async () => {
    try {
      
      setLoading(true)
      const res = await fetch(`https://fakestoreapi.com/products/${params.pid}`)
      const data = await res.json();
      setLoading(false)

      console.log(data);

      setProductData(data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductData()
  },[])

  return (
    <div className = {classes.box}>
      <div className = {classes.container}>
        <div className = {classes.left}>
          <img src= {productData.image} alt="product image" />
        </div>
        <div className = {classes.right}>
          <p className = {classes.title}>
            {productData.title}
          </p>
          <p className = {classes.price}>
            {`Rs. ${productData.price}`}
          </p>
          <div className = {classes.rating_box}>
            <p>
              Rating:
              <span className = {classes.rating}>{productData.rating?.rate}</span>
              <span className = {classes.count}>{productData.rating?.count} user feedbacks</span>
            </p>
          </div>
          <p className = {classes.desc}>
            {productData.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product