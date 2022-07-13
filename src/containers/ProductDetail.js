import React,{useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeselectedProduct } from '../redux/actions/productActions';
const ProductDetail = () => {
   const product=useSelector((state)=>state.product)
    const {productID}=useParams();
    console.log("pro",product);
    const dispatch=useDispatch();
    const fetchProductDetail=async()=>{
        const response=await axios
        .get(`https://fakestoreapi.com/products/${productID}`)
        .catch((e)=>{console.log(e);})
        console.log("res",response);
    dispatch(selectedProduct(response.data))
    }


    useEffect(()=>{
        if(productID && productID!=="")
        {
        fetchProductDetail();
        }
        return ()=>{
            dispatch(removeselectedProduct())
        }
    },[productID])


  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div style={{margin:"3rem"}}>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" alt={product.image} src={product.image} />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail