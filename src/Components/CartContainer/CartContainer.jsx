import { useCartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom";


export const CartContainer = () => {
        const { cart, totalPrice, emptyCart} = useCartContext();

        const handleemptyCart = () =>{
            emptyCart();
        }
    
    return  (
        <>
            <h1>Shopping Cart</h1>
            { 
            cart.map((product) => (
                                        <div key={product.id}>
                                        <p>Product: {product.title}</p>
                                        <p>Price: $ {product.price}</p>
                                        <p>Qty: {product.quantity}</p>
                                        </div> 
                                       ))
            }
            
            {
                cart.length > 0 ?
                <>
                <h2>Total Price: {totalPrice()}</h2>
                <button onClick={handleemptyCart}> Empty Cart </button>
                <button><Link to='/checkout'>Buy Now</Link></button>
                <button><Link to='/'>Continue Shopping</Link></button>
                </>
                :
                <>
                <h2>Cart is empty</h2>
                <Link to='/'>Continue Shopping</Link>
                </>
            }
            
        </>
    )
    }