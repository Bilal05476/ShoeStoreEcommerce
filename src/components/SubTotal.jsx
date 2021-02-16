import "./SubTotalStyle.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../reducer";

function SubTotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className='subTotal__main'>
      <div className='bill'>Your Bill</div>
      <h2>Your Selected Items</h2>
      {basket.length === 0 && (
        <div className='buyer__items'>
          <div className='checkbox select__items'>
            <i className='fa fa-product-hunt'></i> --- $ 0{" "}
          </div>
        </div>
      )}
      {basket.map((item, ind) => {
        return (
          <div className='buyer__items' key={ind}>
            <div className='checkbox'>
              <i className='fa fa-product-hunt'></i>
            </div>
            <li className='select__items'>
              {item.name} - $ {item.price}
            </li>
          </div>
        );
      })}
      <div className='subTotal'>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} item(s)) <br />{" "}
                <strong>Price: {`${value}`}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$ "}
        />
        {basket.length === 0 ? (
          <button className='checkout__btn muted' disabled>
            Proceed to Checkout
          </button>
        ) : (
          <button className='checkout__btn'>Proceed to Checkout</button>
        )}
      </div>
    </div>
  );
}

export default SubTotal;
