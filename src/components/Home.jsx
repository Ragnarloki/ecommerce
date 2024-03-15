import React, { useState,useEffect} from 'react'
import axios from "axios";

function Home() {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        axios.get("https://real-time-amazon-data.p.rapidapi.com/product-details",{
            params:{
                asin: 'B07ZPKBL9V',
                country: 'US',
               
              
            },headers: {
                'X-RapidAPI-Key': 'faf288fcdamsh47d67746677463ep17d5f4jsnef9170c0d002',
                'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
              }
        }).then(res=>{
            setProduct(res.data.data);
            console.log(product)
        }).catch(e=>{console.log(e)})
    },[])
  return (
    <div>
       <div className="card">
  <img src={product.product_photos[0]} alt="Denim Jeans" style={{width:"100%"}} />
  <h1>Tailored Jeans</h1>
  <p className="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
</div>


    </div>
  )
}

export default Home