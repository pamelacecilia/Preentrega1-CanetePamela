import { Link } from "react-router-dom";
import { Filter } from "./Filter";
const productFiltered = ({products, filterState}) => (
    <>

        {
            filterState === '' ? 
                
                    products.map(product => <div className="card w-25 m-3" key={product.id}>
                                                <img src={product.imageUrl} className="card-img-top"/>
                                                <div className="card-body">
                                                    <p>Title: {product.title}</p>
                                                    <p>Price: {product.price}</p>
                                                </div>
                                                <div className="card-footer">
                                                <Link to={`/detail/${product.id}`}>Details</Link>
                                                </div>
                                            </div>
                    )
                
                :
                
                    products.map(product => <div className="card w-25 m-3" key={product.id}>
                                            <img src={product.imageUrl} className="card-img-top"/>
                                            <div className="card-body">
                                                <p>Title: {product.title}</p>
                                                <p>Price: {product.price}</p>
                                            </div>
                                            <div className="card-footer">
                                            <Link to={`/detail/${product.id}`}>Details</Link>
                                            </div>
                                        </div>
                    )
                

        }
    </>
)

export const ItemList = ({products}) => {
  return (
    <>
         <Filter products= {products}>
        { productFiltered }
        </Filter>
    </>
  )
}