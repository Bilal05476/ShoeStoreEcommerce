import './Adi.css';
import adidas from './Adi.json';
import {NavLink} from 'react-router-dom';

const Adidas = () => {
    return(
    <div className="adidas">
        <div className="container-fluid">
            <div className="row">  
                {Object.keys(adidas).map(item => {
                    const shoe = adidas[item];
                    const desc = shoe.description.slice(0,150);
                    return(
                        <div key={shoe.shoeId} className="col-md-3">
                            <NavLink to={`/product/${item}`} className="cardStyle">
                                <div className="card mx-2 my-5">
                                    <img src={shoe.img} className="card-img-top" alt="shoe" />
                                    <div className="card-body text-light">
                                        <h3 className="card-title">{shoe.shoeName}</h3>
                                        <p className="card-text">{desc}.....</p>
                                        <p className="card-text">$ {shoe.price}</p>
                                    </div>
                                </div>
                            </NavLink> 
                        </div>      
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default Adidas;