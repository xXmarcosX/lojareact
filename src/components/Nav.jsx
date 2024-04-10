import { Link } from "react-router-dom"

function Nav(){
    return(
        <>
        <header className="menu">
            <nav className="nav-menu">
                <ul>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/sobre" className="link">Sobre</Link>
                    <Link to="/contato" className="link">Contato</Link>
                    <Link to="/login" className="link">Login</Link>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Nav