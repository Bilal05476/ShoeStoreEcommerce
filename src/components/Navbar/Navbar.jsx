import './Nav.css';
import logo from './img/weblogo.png';
import {NavLink} from 'react-router-dom';
import {useStateValue}from '../StateProvider';
const Navbar = () => {
    const [{ basket }] = useStateValue();
    const [{user}] = useStateValue();

    return (
        <>
        <nav className="fixed-top">
            <div className="container-fluid">
                <div className="container">
                    <div className="row navigations">
                        <div className="col-4 col-md-2">
                            <h1 className="text-light text-center">
                                <NavLink to="/">
                                    <img src={logo} className="weblogo" alt="logo" />
                                </NavLink>
                            </h1>
                        </div>
                        <div className="col-2 col-md-6 icon__div">
                            <div className="navbar-toggler myToggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <div className="menu__icons">
                                    <div className="line line__1"></div>
                                    <div className="line line__2"></div>
                                    <div className="line line__3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 details__div">
                            {!user ? (
                               <>
                                <img className="avatar" src="https://i.pinimg.com/originals/34/f2/50/34f250635ed02218356595ea6d730518.jpg" alt="user avatar" />
                                </> 
                            ) : (
                                <>
                                <img className="avatar" src={user.photoURL} alt="user avatar" />
                                </>
                            )}
                            <div className="account__details">
                            {!user ? (
                               <>
                                <NavLink to="/account" className="login__link">
                                    <h5 className="text-light">Sign In</h5>
                                </NavLink>
                                <h6 className="text-light">Guest</h6>
                                </> 
                            ) : (
                                <>
                                <NavLink to="/account" className="login__link">
                                    <h5 className="text-light">Sign Out</h5>
                                </NavLink>
                                <h6 className="text-light">{user?.displayName}</h6>
                                </>
                            )}    
                            </div>
                            <div className="cart__div">
                                <NavLink to="/cart" className="cart__link">
                                    <h1 className="text-light">
                                            <i className="fa fa-shopping-cart"></i>
                                        <span>{basket?.length}</span>
                                    </h1>
                                </NavLink>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="col-12 col-md-4 details__div1">
                            {!user ? (
                               <>
                                <img className="avatar" src="https://i.pinimg.com/originals/34/f2/50/34f250635ed02218356595ea6d730518.jpg" alt="user avatar" />
                                </> 
                            ) : (
                                <>
                                <img className="avatar" src={user.photoURL} alt="user avatar" />
                                </>
                            )}    
                            
                            <div className="account__details">
                            {!user ? (
                               <>
                                <NavLink to="/account" className="login__link">
                                    <h5 className="text-light">Sign In</h5>
                                </NavLink>
                                <h6 className="text-light">Guest</h6>
                                </> 
                            ) : (
                                <>
                                <NavLink to="/account" className="login__link">
                                    <h5 className="text-light">Sign Out</h5>
                                </NavLink>
                                <h6 className="text-light">{user?.displayName}</h6>
                                </>
                            )}    
                            </div>
                            <div className="cart__div">
                                <NavLink to="/cart" className="cart__link">
                                    <h1 className="text-light">
                                            <i className="fa fa-shopping-cart"></i>
                                        <span>{basket?.length}</span>
                                    </h1>
                                </NavLink>
                            </div>
                            </div>
                        </div> 
                          
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;







