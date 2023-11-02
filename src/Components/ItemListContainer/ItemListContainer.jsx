import { useEffect, useState } from "react"
import { mFetch } from "../helpers/mFetch"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom"

function ItemListContainer({greetings = 'saludo por defecto'}) {
    const [ products, setProducts] = useState ([])
    const { cid } = useParams()

  useEffect(() => {
    if(cid){
      mFetch()
    .then(resultado => setProducts(resultado.filter(product => product.category===cid)))
    .catch(error => console.log(error))

    }else{
      mFetch()
     .then(resultado => setProducts(resultado))
     .catch(error => console.log(error))
    }
}, [cid])

return (
  <>
 <div>
  {greetings}
 </div>

<div className= "d-flex justify-content-center align-items-center">
{products.map(product => <div className="card w-25">
                              <div className="card-body">
                              <img src={product.imageUrl} className="img-fluid"  style={{ height: '20rem' }}/>
                              <p>Nombre: {product.title}</p>
                              <p>Category: {product.category}</p>
                              <p>Price: {product.price}</p>
                              </div>
                              <div className="card-footer">
                                <button className="variant="primary>Details</button>
                              </div>
                          </div>)}
</div>
  </>
)
}
export default ItemListContainer
