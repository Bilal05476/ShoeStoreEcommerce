import {useEffect} from 'react';
import './ShoeItemStyle.css';
import {useParams} from 'react-router-dom';
import Product from '../Product/Prod.json';
import {useStateValue} from '../StateProvider';

const ShoeItem = () => {
    
    const { id } = useParams();
    const shoe = Product[id]

    const identity = shoe.shoeId;
    const name = shoe.shoeName;
    const img = shoe.img;
    const desc = shoe.description;
    const price = shoe.price;

    const [{basket},dispatch] = useStateValue();
    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                identity, name, img, desc, price
            }
        })
    }
    // Save th data into local storage so when page Refresh data remains in state
    useEffect(() => {
        const data = localStorage.getItem("my-cart");
        if (data){
            JSON.parse(data);
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem("my-cart", JSON.stringify(basket))
    })

    

    return(
        <div className="shoeItem py-4">
        <div className="container-fluid">
            <div className="row">  
                <div className="offset-md-1 col-md-4">
                    <div key={identity} className="card mx-2 my-5">
                        <img src={img} className="card-img-top" alt="shoe" />
                    </div>
                </div>
                <div className="col-md-6 shoeDetails">
                    <h3 className="text-light">{name}</h3>
                    <p className="text-light">{desc}.</p>
                    <p className="text-light">$ {price}</p>
                    <button className="btn btn-light my-3 addCart" onClick={addToBasket}>Add to Cart</button>
                </div>
                </div>      
            </div>
        </div>
    )
}

export default ShoeItem;