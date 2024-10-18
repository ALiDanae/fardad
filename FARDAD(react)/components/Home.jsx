
import LoginForm from "./LoginForm"
import ProductList from "./ProductList"


const Home = ({ UserInf , setInf }) => {

    

    return (
        <>

           <div>
           {UserInf.phoneNumber ? <ProductList /> : <LoginForm setInf={setInf}/>}

           </div>



        </>
    )
}


export default Home