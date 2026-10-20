import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  // Indoor Plants
 {
  id: 1,
  name: "Snake Plant",
  price: 25,
  image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b07?auto=format&fit=crop&w=500&q=80"
},,
  {
  id: 2,
  name: "Peace Lily",
  price: 30,
  image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80"
},
  {
    id: 3,
    name: "Monstera",
    category: "Indoor Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
  id: 4,
  name: "ZZ Plant",
  price: 28,
  image: "https://images.unsplash.com/photo-1614594576535-7c7f1f3d5e0a?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 32,
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85"
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 18,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 8,
    name: "Echeveria",
    category: "Succulents",
    price: 15,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },
  {
    id: 9,
    name: "Jade Plant",
    category: "Succulents",
    price: 22,
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112"
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 16,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 11,
    name: "String of Pearls",
    category: "Succulents",
    price: 24,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },
  {
    id: 12,
    name: "Burro's Tail",
    category: "Succulents",
    price: 26,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },

  // Flowering Plants
  {
    id: 13,
    name: "Orchid",
    category: "Flowering Plants",
    price: 40,
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb"
  },
  {
    id: 14,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 15,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },
  {
    id: 16,
    name: "Lavender",
    category: "Flowering Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
  },
  {
    id: 17,
    name: "Hibiscus",
    category: "Flowering Plants",
    price: 32,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 18,
    name: "Marigold",
    category: "Flowering Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants"
  ];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-section">
      <div className="product-header">
        <h2>Our Plants</h2>

        <div className="cart-display">
          🛒 Cart Items: <strong>{cartCount}</strong>
        </div>
      </div>

      {categories.map((category) => (
        <div className="category-section" key={category}>
          <h3>{category}</h3>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                 <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                  <div className="plant-info">
                    <h4>{plant.name}</h4>

                    <p>
                      A beautiful {plant.name.toLowerCase()} suitable
                      for your home.
                    </p>

                    <p className="price">
                      ${plant.price}
                    </p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;