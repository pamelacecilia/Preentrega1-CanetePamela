import { useState, useEffect } from 'react'
import ItemCount  from '../ItemCount/ItemCount'
import { useCartContext } from '../../contexts/CartContext';
import { Loading } from '../Loading/Loading';


export const ItemDetail = ({product}) => {

    const {cart, addToCart} = useCartContext()

    const [quantity, setQuantity] = useState(1);
    const handleSubstract = () => {
      quantity > 1 && setQuantity(quantity - 1)
    }

    const handleAdd = () => {
      quantity < product.stock && setQuantity(quantity + 1)
    }
    
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
      const fetchData = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          setLoading(false); 
        } catch (error) {
          console.error('Error al obtener los datos del producto:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [product.id]);

  return (
    <>
    {loading ? (
        <Loading />
      ) : (
        <div className="card w-25 m-3" key={product.id}>
                                            <img src={product.imageUrl} className="card-img-top"/>
                                            <div className="card-body">
                                                <p>Title: {product.title}</p>
                                                <p>Category: {product.category}</p>
                                                <p>: {product.description}</p>
                                                <p>Price: {product.price}</p>
                                                <ItemCount 
                                                quantity={quantity}
                                                handleAdd={handleAdd}
                                                handleSubstract={handleSubstract} 
                                                handleAddToCart= {() => {addToCart(product, quantity)}} />

                                            </div>
        </div>
         )}
    </>
  )
  }
export default ItemDetail
