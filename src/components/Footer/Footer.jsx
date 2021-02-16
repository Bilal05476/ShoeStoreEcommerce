import "./Foot.css";
import Logo from "./img/weblogo.png";
import { NavLink } from "react-router-dom";
import { paths } from "./Paths.json";
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container-fluid'>
          <div className='container'>
            <div className='row text-light'>
              <div className='col-md-3 credit__div'>
                <p className='credits'>
                  <img src={Logo} alt='logo' className='logo' />
                  &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, eveniet mollitia ut aperiam quasi quo necessitatibus
                  accusantium fuga tenetur exercitationem vitae optio delectus
                  quis officia. Rerum suscipit aliquam maiores corporis
                  dignissimos culpa cum debitis. Repudiandae delectus laudantium
                  laborum voluptatum vel, temporibus commodi ipsa similique
                  deserunt facere repellendus esse, animi amet.
                </p>
              </div>
              <div className='col-md-3 link__div'>
                <h4 className='my-2'>Our Products</h4>
                <div className='links'>
                  {paths.map((shoe) => {
                    return (
                      <NavLink
                        key={shoe.shoeId}
                        to={shoe.param}
                        className='nav-link'>
                        {shoe.shoeName}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <div className='col-md-3 social__div'>
                <h4>Connect Us</h4>
                <div className='social__icons'>
                  <a href='https://facebook.com' target='blank'>
                    <i className='fa fa-facebook-square social__icon'></i>
                  </a>
                  <a href='https://instagram.com' target='blank'>
                    <i className='fa fa-instagram social__icon'></i>
                  </a>
                  <a href='https://youtube.com' target='blank'>
                    <i className='fa fa-youtube-play social__icon'></i>
                  </a>
                  <a href='https://google.com' target='blank'>
                    <i className='fa fa-google-plus social__icon'></i>
                  </a>
                </div>
              </div>
              <div className='col-md-3 subscribe__div'>
                <h4>Subscribe For Newsletter</h4>
                <div className='subs'>
                  <input
                    className='form-control'
                    placeholder='Subscribe'
                    required
                  />
                  <button className='btn text-warning'>
                    <i className='fa fa-paper-plane mx-2'></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='container text-center'>
                <h5 className='copyright'>
                  Copyright &copy; 2021 || Spin Shoe
                </h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
