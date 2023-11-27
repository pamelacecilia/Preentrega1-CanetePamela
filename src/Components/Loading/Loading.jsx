import { useEffect } from "react"

export const Loading = () => {
    useEffect(()=>{
        return () =>{
        console.log('desmontaje')
        }
    })
    return <h2>Loading...</h2>
}