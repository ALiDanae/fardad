



const Header = ({UserInf}) => {


    return (
        <>
            <div className="header">

                {UserInf.name ? <h1>hi {UserInf.name}</h1> : <h1>You dont login</h1>}

                <h1 className="logo">FARDAD</h1>
            </div>
        </>
    )

}

export default Header;