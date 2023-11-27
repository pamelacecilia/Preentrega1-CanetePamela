import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/config";

function ItemListContainer({ greetings = 'saludo por defecto' }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const productsRef = collection(db, "products");
        const q = cid ? query(productsRef, where("category", "==", cid)) : productsRef;
        const querySnapshot = await getDocs(q);

        setProducts(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cid]);

  return (
    <>
      {loading ? <Loading /> : <ItemList products={products} />}
    </>
  );
}

export default ItemListContainer;
