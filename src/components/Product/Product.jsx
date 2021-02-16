import { useState } from "react";
import "./Prod.css";
import product from "./Prod.json";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState({
    Search: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  return (
    <div className='product'>
      <div className='container-fluid'>
        <div className='row'>
          <form className='mx-auto my-4 col-8 search__div'>
            <input
              name='Search'
              value={data.Search}
              onChange={InputEvent}
              className='form-control'
              placeholder='Search'
              required
            />
          </form>
        </div>
        <div className='row'>
          {Object.keys(product)
            .filter((val) => {
              if (data.Search === "") {
                return val;
              } else if (
                val.toLowerCase().includes(data.Search.toLowerCase())
              ) {
                const shoe = product[val];
                return shoe;
              }
            })
            .map((item) => {
              const shoe = product[item];
              const desc = shoe.description.slice(0, 150);
              return (
                <div key={shoe.shoeId} className='col-md-3'>
                  <NavLink to={`/product/${item}`} className='cardStyle'>
                    <div className='card mx-2 my-5'>
                      <img
                        src={shoe.img}
                        className='card-img-top shoes__img'
                        alt='shoe'
                      />
                      <div className='card-body text-light'>
                        <h3 className='card-title'>{shoe.shoeName}</h3>
                        <p className='card-text'>{desc}.....</p>
                        <p className='card-text'>$ {shoe.price}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
