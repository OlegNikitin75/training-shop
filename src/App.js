import {useState} from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Main from './pages/Main';
import Women from './pages/Women';
import Men from './pages/Men';
import Accessories from './pages/Accessories';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Beauty from './pages/Beauty';
import Contacts from './pages/Contacts';
import Product from "./pages/Product";
import './App.css';
import {DATA} from './data.js';
import {PRODUCTS} from './product';

const App = () => {

  const [filterWomen, setFilterWomen] = useState(false);
  const [filterMen, setFilterMen] = useState(false);
  const showFilters = (id) => {
    if (id === 'women-btn') {
      setFilterWomen(!filterWomen);
    }
    if (id === 'men-btn') {
      setFilterMen(!filterMen);
    }
  }
  const [clickWomen, setClickWomen] = useState(true);
  const [clickMen, setClickMen] = useState(true);
  const handelClick = (id) => {
    if (id === "women-btn") {
      setClickWomen(!clickWomen);
    }
    if (id === "men-btn") {
      setClickMen(!clickMen);
    }
    showFilters(id);
  }

  const [productFilter, setProductFilter] = useState([]);

  return (
    <div className="app" data-test-id="app">
      <Router>
        <Navbar navItems={DATA.navItems}/>
        <Routes>
          <Route index element={<Main
            products={PRODUCTS}
            data={DATA}
          />}/>
          <Route
            path="/"
            element={<Main
              products={PRODUCTS}
              data={DATA}
            />}/>
          <Route
            path="/about"
            element={<About/>}/>
          <Route
            path="/women"
            element={<Women
              products={productFilter}
              productsItems={PRODUCTS.women}
              productType="women"
              func={handelClick}
              filter={filterWomen}
              click={clickWomen}
              productFilter={productFilter}
              setProductFilter={setProductFilter}
            />}/>
          <Route
            path="/men"
            element={<Men
              productsItems={PRODUCTS.men}
              products={productFilter}
              productType="men"
              func={handelClick}
              filter={filterMen}
              click={clickMen}
              productFilter={productFilter}
              setProductFilter={setProductFilter}
            />}/>
          <Route path="/beauty" element={<Beauty/>}/>
          <Route path="/accessories" element={<Accessories/>}/>
          <Route path="/contact" element={<Contacts/>}/>
          <Route
            path="/product/:category/:id"
            element={<Product
              products={PRODUCTS}
            />
            }/>
        </Routes>
        <Footer data={DATA.footerNavItems}/>
      </Router>
    </div>
  );
}

export default App;
