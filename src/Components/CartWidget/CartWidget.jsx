import { Link } from 'react-router-dom';
import cart from '../../assets/cart.jpeg';
import { useCartContext } from '../../contexts/CartContext';
const CartWidget = () => {
  const { cartnumber } = useCartContext();
  return (
    <div>
        <form className="d-flex" role="search">
        <Link to='/cart'>
          <span>{cartnumber}</span>
          <img width="50" height="50" src={cart}/>
          </Link>
      </form>
    </div>
  )
}

export default CartWidget