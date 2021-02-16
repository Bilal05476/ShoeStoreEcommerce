import './WomenStyle.css';
import women from './WomenProduct.json';
import {NavLink} from 'react-router-dom';

const Women = () => {
    return(
    <div className="woman">
        <div className="container-fluid">
            <div className="row">  
                {Object.keys(women).map(item => {
                    const shoe = women[item];
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

export default Women;