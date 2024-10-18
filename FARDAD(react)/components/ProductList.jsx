import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/fetch"
const ProductList = () => {


    const Data = useFetch("https://fakestoreapi.com/products")

    const navigate = useNavigate()

    return (
        <div className="productslist">
            {Data.map(item => <div className="products">
                <img src={item.image} />
                <h1>{item.title}</h1>
                <h3>{item.price}</h3>
                <button onClick={() => {navigate(`./${item.id}`)}}>more ...</button>
            </div>)}
        </div>
    )

}

export default ProductList