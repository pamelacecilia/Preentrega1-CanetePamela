const products = [
    { id: '1',title: 'Saladillo', category:'paintings', description: 'Author: Elsa Runde ,Oleo sobre tela, 50 x 70 cm', price: 6000, stock: 3, imageUrl:'https://juanadeartegaleria.com/wp-content/uploads/2023/06/Los-caminantes-Acuarela-35x25cm-2019.jpg'},
    { id: '2', title: 'Aria', category:'paintings', description: 'Author: Carina Adur ,Acrílico sobre tela, 150 x 100 cm', price: 5000,stock:2, imageUrl: 'https://juanadeartegaleria.com/wp-content/uploads/2022/11/ARIA.jpg'},
    { id: '3', title: 'Mujer Oriental', category:'paintings', description: 'Author: Esther Queiruga ,Acrílico sobre tela, 90 x 70 cm', price: 3000,stock:3, imageUrl:'https://juanadeartegaleria.com/wp-content/uploads/2023/08/HACIA-EL-FUTURO-scaled.jpg'},
    { id: '4', title: 'Pez', category:'sculptures' , description: 'Author: Mario Alvarez ,Escultura en cerámica esmaltada y hierro', price: 4000,stock:2, imageUrl:'https://juanadeartegaleria.com/wp-content/uploads/2023/06/PEZ.jpg'},
    { id: '5', title: 'Lechuza', category:'sculptures' , description: 'Author: Mario Alvarez, Escultura en hierro, 60 x 40 x 30 cm', price: 10000,stock:4,imageUrl:'https://juanadeartegaleria.com/wp-content/uploads/2023/06/LECHUZA.jpg'},
    { id: '6', title: 'Bailarina', category:'sculptures',  description: 'Author: Mario Alvarez,Escultura en bronce, hierro, cobre y alpaca', price: 2000,stock:4,imageUrl:'https://juanadeartegaleria.com/wp-content/uploads/2023/06/BAILARINA.jpg'},
]

export const mFetch = (id) =>{
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res (id ? products.find(prod => prod.id === id) : products)
        }, 500)
    })
}