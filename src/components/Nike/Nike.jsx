import './NikeStyle.css';
import nike from './NikeProduct.json';
import {NavLink} from 'react-router-dom';

const Nike = () => {
    return(
    <div className="nike">
        <div className="container-fluid">
            <div className="row">  
                {Object.keys(nike).map(item => {
                    const shoe = nike[item];
                    return(
                        <div key={shoe.shoeId} className="col-md-3">
                            <NavLink to={`/product/${item}`} className="cardStyle">
                                <div className="card mx-2 my-5">
                                    <img src={shoe.img} className="card-img-top" alt="shoe" />
                                    <div className="card-body text-light">
                                        <h3 className="card-title">{shoe.shoeName}</h3>
                                        <p className="card-text">{shoe.description}.</p>
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

export default Nike;