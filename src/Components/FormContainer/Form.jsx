import { useState } from "react";

export const Form = () => {

    const [valores, setValores] = useState({
        name: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado", valores)
    }
    const handleValores = (e) => {
        setValores({...valores, [e.target.name]: e.target.value});
    }


    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={valores.name} onChange={handleValores}/>
                <input type="email" placeholder="Email" value={valores.email} onChange={handleValores}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
