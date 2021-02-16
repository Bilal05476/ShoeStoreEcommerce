import "./CartStyle.css";
import { useStateValue } from "../StateProvider";

const Cart = ({ identity, name, img, desc, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(`Basket : ${basket.length} items`);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      identity,
    });
  };
  return (
    <div className='cartProduct py-4'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='offset-md-1 col-md-2'>
            <div key={identity} className='cart__prod mx-2 my-5'>
              <img src={img} className='cart-img-top' alt='shoe' />
            </div>
          </div>
          <div className='col-md-6 cartDetails'>
            <h3 className='text-light'>{name}</h3>
            <p className='text-light'>{desc}.</p>
            <p className='text-light'>$ {price}</p>
            <button
              className='btn btn-light my-3 removeCart'
              onClick={removeFromBasket}>
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
