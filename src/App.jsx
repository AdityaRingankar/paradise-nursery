import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <a href="#about">About Us</a>
          <a href="#cart">Cart 🛒</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Paradise Nursery</h1>

          <p>
            Bring nature into your home with our beautiful collection of
            houseplants.
          </p>

          <button
            onClick={() => {
              document
                .getElementById("plants")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </button>
        </div>
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="plants">
        <ProductList />
      </section>
    </div>
  );
}

export default App;