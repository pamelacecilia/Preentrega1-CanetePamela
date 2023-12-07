import { useCartContext } from "../../contexts/CartContext";
import { useForm} from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {

const [PurchasesId, setPurchasesId] = useState ("");

    const { cart, totalPrice, emptyCart} = useCartContext();

    const {register, handleSubmit} = useForm();
    const buy = (data) => {
        const Purchases = {
            client: data,
            products: cart,
            total: totalPrice(),
        }
    
    const purchaseRef = collection(db, "Purchases");

    addDoc(purchaseRef, Purchases)
        .then((doc) => {
            setPurchasesId(doc.id);
            emptyCart();
        })
    }

    if (PurchasesId) {
        return(
            <div> 
                <h2> Thanks for your purchase</h2>
                <p>Your purchase number is {PurchasesId}</p>
                <Link to='/'>Continue Shopping</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Finish your Purchase</h1>
            <h2>Please complete your personal data</h2>
            <form onSubmit={handleSubmit(buy)}>
                <input type="text" placeholder="Name" {...register("name")}/>
                <input type="email" placeholder="Email" {...register("email")}/>
                <input type="phone" placeholder="Phone number" {...register("phone")}/>
                <button type="submit">Finish Purchase</button>
            </form>
        </div>
    )
}
