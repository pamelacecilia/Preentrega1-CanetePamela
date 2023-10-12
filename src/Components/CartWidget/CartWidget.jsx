import cart from '../../assets/cart.jpeg';
const CartWidget = () => {
  return (
    <div>
        <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit"><img width="50" height="50" src={cart}/></button>
      </form>
    </div>
  )
}

export default CartWidget