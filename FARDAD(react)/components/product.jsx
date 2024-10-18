import { useParams } from "react-router-dom";
import useFetch from "../hooks/fetch";

const Product = ({UserInf}) => {


    const id = useParams().id

    const data = useFetch("https://fakestoreapi.com/products/" + id)

    return(
                <>
                {UserInf.email ?         <div className="product">
            <img src={data.image}/>
            <div>
                <h1>{data.title}</h1>
                <h3>{data.category}</h3>
                <h4>{data.description}</h4>
                <h1>{data.price} $</h1>

            </div>
        </div> : "you must login"}
                </>
    )
}

export default Product;