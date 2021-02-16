import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import Product from '../src/components/Product/Product';
import Adidas from '../src/components/Adidas/Adidas';
import Man from '../src/components/Man/Man';
import Women from '../src/components/Women/Women';
import Nike from '../src/components/Nike/Nike';
import Wooden from '../src/components/Wooden/Wooden';
import Leather from '../src/components/Leather/Leather';
import Cart from '../src/components/Cart/Cart';
import Login from '../src/components/Login';
import ShoeItem from '../src/components/ShoeItem/ShoeItem';
import { Switch, Route, Redirect} from 'react-router-dom';

const App = () => {
  return (
    <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Product} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/:id" component={ShoeItem} />
            <Route exact path="/adidas" component={Adidas} />
            <Route exact path="/man" component={Man} />
            <Route exact path="/women" component={Women} />
            <Route exact path="/nike" component={Nike} />
            <Route exact path="/wooden" component={Wooden} />
            <Route exact path="/leather" component={Leather} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/account" component={Login} />
            <Redirect to="/" />
          </Switch>
        <Footer />
    </div>
  );
}

export default App;
