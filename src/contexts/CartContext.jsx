import { createContext, useState, useContext } from "react"

export const CartContext = createContext ();
export const useCartContext = () => useContext (CartContext)

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const productAdded = { ...product, quantity };
    
        const newCart = [...cart];
        const inCart = newCart.find((p) => p.id === productAdded.id);
    
        if (inCart) {
          inCart.quantity += quantity;
        } else {
          newCart.push(productAdded);
        }
        setCart(newCart);
      };
    
      const quantityInCart = () => {
        return cart.reduce((acc, product) => acc + product.quantity, 0);
      };
    
      const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
      };
    
      const emptyCart = () => {
        setCart([]);
      };
    
      return (
        <CartContext.Provider
          value={{
            setCart,
            cart,
            addToCart,
            quantityInCart,
            totalPrice,
            emptyCart,
          }}
        >
          {children}
        </CartContext.Provider>
      );
    };
