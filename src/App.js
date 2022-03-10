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

  const [colorFilter, setColorFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);

  const [productFilter, setProductFilter] = useState([]);


  const objFiltersValues = {
    color: colorFilter,
    size: sizeFilter,
    brand: brandFilter,
    price: priceFilter
  }


  const filterItems = (type) => {

    setProductFilter(PRODUCTS[type].filter(product =>
      (objFiltersValues.color.length > 0
        ? (product.images.filter(item => objFiltersValues.color.some(elem => elem === item.color)).length)
        : product)
      &&
      (objFiltersValues.size.length > 0
        ? (product.sizes.filter(item => objFiltersValues.size.some(elem => elem === item)).length)
        : product)
      &&
      (objFiltersValues.brand.length > 0
        ? (objFiltersValues.brand.some(elem => elem === product.brand))
        : product)
      &&
      (objFiltersValues.price.length > 0
        ? (objFiltersValues.price.some(elem => (product.price >= elem && product.price <= +elem + 50)))
        : product)
    ))
  }
  const changeFilter = (value, currentFilter) => {
    if (currentFilter === 'color') {
      if (colorFilter.includes(value)) {
        setColorFilter([...colorFilter.filter(item => item !== value)]);
      } else {
        setColorFilter([...colorFilter, value]);
      }
    }
    if (currentFilter === 'size') {
      if (sizeFilter.includes(value)) {
        setSizeFilter([...sizeFilter.filter(item => item !== value)]);
      } else {
        setSizeFilter([...sizeFilter, value]);
      }
    }
    if (currentFilter === 'brand') {
      if (brandFilter.includes(value)) {
        setBrandFilter([...brandFilter.filter(item => item !== value)]);
      } else {
        setBrandFilter([...brandFilter, value]);
      }
    }
    if (currentFilter === 'price') {
      if (priceFilter.includes(value)) {
        setPriceFilter([...priceFilter.filter(item => item !== value)]);
      } else {
        setPriceFilter([...priceFilter, value]);
      }
    }
  }

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
              objFiltersValues={objFiltersValues}
              func={handelClick}
              filter={filterWomen}
              click={clickWomen}
              changeFilter={changeFilter}
              filterItems={filterItems}
              productFilter={productFilter}

            />}/>
          <Route
            path="/men"
            element={<Men
              productsItems={PRODUCTS.men}
              products={productFilter}
              productType="men"
              objFiltersValues={objFiltersValues}
              func={handelClick}
              filter={filterMen}
              click={clickMen}
              changeFilter={changeFilter}
              filterItems={filterItems}
              productFilter={productFilter}
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
