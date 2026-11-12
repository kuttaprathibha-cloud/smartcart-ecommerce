
import "./App.css";
import { products } from "./data/products";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h1>🛒 SmartCart</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#offers">Offers</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h2>Welcome to SmartCart!</h2>
        <p>
          Shop your favourite products and enjoy amazing discounts.
        </p>
        <a href="#products" className="shop-button">
          Shop Now
        </a>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <h2>Our Products</h2>
        <p>Explore our latest collection</p>

        <ProductList products={products} />
      </section>

      {/* Offers Section */}
      <section className="offers-section" id="offers">
        <h2>Special Shopping Offers 🎁</h2>
        <p>Get 10% discount on orders above ₹1,000!</p>
        <p>Enjoy free delivery on orders above ₹1,000!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 SmartCart. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
