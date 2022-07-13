import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
const ProductListing = () => {
    const products=useSelector((state)=>state);
   const dispatch=useDispatch();

    const fetchProducts=async()=>{
        const response=await axios
        .get("https://fakestoreapi.com/products")
        .catch((e)=>{console.log(e)});
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
    fetchProducts();
    },[])
    console.log("Products:",products);
  return (
    <div>
        <ProductComponent />
        </div>
  )
}

export default ProductListing;