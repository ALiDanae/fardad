



const Header = ({ UserInf , total }) => {




    return (
        <>
            <div className="header">

                <h2>total price : {total} </h2>

                {UserInf.name ? <h1>hi {UserInf.name}</h1>

                    : <h1>You dont login</h1>}

                <h1 className="logo">FARDAD</h1>
            </div>
        </>
    )

}

export default Header;