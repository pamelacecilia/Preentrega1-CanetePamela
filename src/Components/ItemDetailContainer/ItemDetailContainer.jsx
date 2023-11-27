import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useCartContext } from "../../contexts/CartContext";
import { doc, getDoc, query } from "firebase/firestore";
import { db } from "../../Firebase/config";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { pid } = useParams();
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const docRef = doc(db, "products", pid);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setProduct({ ...docSnapshot.data(), id: docSnapshot.id });
        } else {
          setError("No se encontró el producto.");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("Hubo un error.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pid]);

  return (
    <>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <ItemDetail product={product} />}
    </>
  );
};

export default ItemDetailContainer;