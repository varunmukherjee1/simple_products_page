import React from 'react'
import { useNavigate } from "react-router-dom"

import classes from "./productCard.module.css"

const ProductCard = ({data}) => {

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/product/${data.id}`)
  }

  return (
    <div className = {classes.card} onClick = {onClickHandler}>
      <img src={data.image} alt="pic" />
      <div className = {classes.info}>
        <p className = {classes.title}>
          {data.title}
        </p>
        <p className = {classes.desc}>
          {data.description}
        </p>
        <div className = {classes.nums}>
          <p className = {classes.price}>
            {`Rs. ${data.price}`}
          </p>
          <p className = {classes.rating}>
            {data.rating.rate}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard