import React, {useEffect, useState} from 'react'

import ProductCard from '../../components/ProductCard/ProductCard'
import classes from "./products.module.css"

const Products = () => {

  const [allProducts,setAllProducts] = useState([])
  const [loading ,setLoading] = useState(false)

  const fetchProducts = async () => {
    try {

      setLoading(true)
      const pRes = await fetch("https://fakestoreapi.com/products")
      const data = await pRes.json();
      setLoading(false)

      // console.log(data);

      setAllProducts(data)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  },[])

  return (
    <div className = {classes.box}>
      <div className = {classes.container}>
        {loading && <p className= {classes.loading}>Loading...</p>}
        {allProducts.map((pd) => <ProductCard key = {pd.id} data = {pd}/>)}
      </div>
    </div>
  )
}

export default Products