import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../helpers/mFetch";


export const ItemDetailContainer =() => {
    const [product,setProduct] = useState({})
    const { pid } = useParams()
    useEffect(() =>{
        mFetch('1')
        .then(resultado => setProduct(resultado))
        .catch(error => console.log(error))
    },[pid])
    
    return (
        <div className="d-flex justify-content-center" variant="top" >
            <div className="col-6 mt-5">
                <img src={product.imageUrl} alt="" className="img-fluid"/>
            </div>
            <div className='col-6 text-center mt-5'>
                <p>Nombre: {product.title}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
            </div>
        </div>
    )
}

export default ItemDetailContainer