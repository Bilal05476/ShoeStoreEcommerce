import { useStateValue } from "../StateProvider";
import CartProduct from "./CartProduct";
import "./CartStyle.css";
import SubTotal from "../SubTotal";

const Cart = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className='container-fluid'>
      <div className='cart row'>
        <div className='cart__content col-md-8'>
          {basket?.length === 0 ? (
            <div>
              <h2 className='text-center basket__heading'>
                Your Basket is Empty :(
              </h2>
            </div>
          ) : (
            <div>
              <h2 className='text-center basket__heading'>
                Your Shopping Basket
              </h2>
              {basket.map((item, ind) => (
                <CartProduct
                  key={ind}
                  identity={item.identity}
                  name={item.name}
                  img={item.img}
                  desc={item.desc}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </div>
        <div className='checkout__right col-md-4'>
          <SubTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
