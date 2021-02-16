import './Leath.css';
import leather from './Leath.json';
import {NavLink} from 'react-router-dom';

const Leather = () => {
    return(
    <div className="leather">
        <div className="container-fluid">
            <div className="row">  
                {Object.keys(leather).map(item => {
                    const shoe = leather[item];
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

export default Leather;
