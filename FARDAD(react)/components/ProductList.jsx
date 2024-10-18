import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/fetch"
import { useEffect, useState } from "react"



const ProductList = ({ cart, setTotal, setCart }) => {





    const Data = useFetch("https://fakestoreapi.com/products")

    const navigate = useNavigate()
    const getquantity = (id) => {
        const quantity = cart.find(item => item.id == id)?.quantity

        if (quantity == undefined) {
            return 0
        } else {
            return quantity
        }


    }

    const addItem = (id) => {
        const quantity = getquantity(id)
        if (quantity === 0) {
            setCart([...cart, { id: id, quantity: 1 }])
        } else {
            setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
        }


    }
    const deleteItem = (id) => {
        setCart(prev => prev.filter(item => item.id != id))
    }

    const removeItem = (id) => {
        const quantity = getquantity(id)
        if (quantity === 1) {
            deleteItem(id)
        } else {
            setCart(cart.map(item => item.id == id ? { ...item, quantity: item.quantity - 1 } : item))
        }
    }

    const calcPrice = () => {
        const sum = 0
        cart.map(item => Data.map(p => item.id === p.id ?  setTotal(p.price * item.quantity) : p))
        return sum
    }






    calcPrice()

    return (
        <div className="productslist">
            {Data.map(item => <div className="products">
                <img src={item.image} />
                <h1>{item.title}</h1>
                <h3>{item.price} $</h3>
                <button onClick={() => { navigate(`./${item.id}`) }}>more ...</button>
                {getquantity(item.id) > 0 ? <div className="added"> <button className="addbtn" onClick={() => { addItem(item.id) }}>+</button> count : {getquantity(item.id)} <button className="minus" onClick={() => { removeItem(item.id) }}>-</button> </div> : <button onClick={() => { addItem(item.id) }}>Buy Now</button>}
            </div>)}
        </div>
    )

}

export default ProductList