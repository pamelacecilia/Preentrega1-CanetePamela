import { Link } from "react-router-dom"


const ItemCount = ({ quantity, handleSubstract, handleAdd, handleAddToCart }) => {     
   

    return <>
        <div>
            <button className="btn btn-outline-dark" onClick={handleAdd}> + 1 </button>
            <p>{quantity}</p>
            <button className="btn btn-outline-dark" onClick={handleSubstract}> - 1 </button> 
        </div>
        <Link to ='/cart'>     
                <button className="btn btn-outline-dark" onClick={handleAddToCart}> 
                    Add to Cart
                </button>  
        </Link>        
            </>
}

export default ItemCount