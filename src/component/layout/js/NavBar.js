import InputGroup from 'react-bootstrap/InputGroup'
import logo from "../../../image/logo.png"


function NavBar(params) {
    return (
        <header className="bg-dark">
            <div className="container">
                <div className="row align-items-center bg-dark">
                    <div className="col-4 header-logo">
                        <img src={logo} className="img-fluid" alt="" />
                    </div>
                    <div className="col-8 header-menu">
                        <nav className="nav justify-content-center justify-content-lg-end">
                            <a className="nav-link text-light active" href="#">Home</a>
                            <a className="nav-link text-light" href="#">Estoque</a>
                            <a className="nav-link text-light" href="#">Contato</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar;
