import React, { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  // State for filter values
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(100);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedNutrition, setSelectedNutrition] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState([]);

  const products = [
    {
      id: 1,
      name: "Flour",
      price: 55.0,
      rating: 4,
      reviews: 12,
      image: "/Image/main-flour.jpg",
      category: "Flour",
      nutrition: ["High Fiber", "Organic"],
      weight: "1kg",
    },
    {
      id: 2,
      name: "Cookies",
      price: 25.0,
      rating: 4,
      reviews: 29,
      image: "/Image/main-cookie.jpg",
      category: "Veggies",
      nutrition: ["Low Calorie"],
      weight: "500gm",
    },
    {
      id: 3,
      name: "Millet",
      price: 25.0,
      rating: 3,
      reviews: 15,
      image: "/Image/millet-main.jpg",
      category: "Seeds",
      nutrition: ["High Fiber", "Gluten-Free"],
      weight: "2kg",
    },
    {
      id: 4,
      name: "Oil",
      price: 45.0,
      rating: 5,
      reviews: 12,
      image: "/Image/main-oil.jpg",
      category: "Dairy products",
      nutrition: ["Low Fat"],
      weight: "1kg",
    },
  ];

  const categories = [
    "Milk",
    "Veggies",
    "Seeds",
    "Organic Seeds",
    "Flour",
    "Dairy products",
  ];
  const ratings = [5, 4, 3, 2, 1];
  const nutrition = [
    "High Fiber",
    "Low Calorie",
    "No Sugar Added",
    "Organic",
    "Low Fat",
    "Gluten-Free",
  ];
  const weights = ["500gm", "1kg", "2kg", "5kg", "10kg"];
  const tags = ["Gluten-Free", "Fresh", "Vegetarian"];

  // Handle checkbox changes
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const handleNutritionChange = (item) => {
    setSelectedNutrition((prev) =>
      prev.includes(item) ? prev.filter((n) => n !== item) : [...prev, item]
    );
  };

  const handleWeightChange = (weight) => {
    setSelectedWeights((prev) =>
      prev.includes(weight)
        ? prev.filter((w) => w !== weight)
        : [...prev, weight]
    );
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    ) {
      return false;
    }

    // Price filter
    if (product.price > priceRange) {
      return false;
    }

    // Rating filter
    if (
      selectedRatings.length > 0 &&
      !selectedRatings.includes(product.rating)
    ) {
      return false;
    }

    // Nutrition filter
    if (
      selectedNutrition.length > 0 &&
      !selectedNutrition.some((n) => product.nutrition.includes(n))
    ) {
      return false;
    }

    // Weight filter
    if (
      selectedWeights.length > 0 &&
      !selectedWeights.includes(product.weight)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <div className="ec-contact-section">
        <div className="ec-contact-hero">
          <h1 className="ec-contact-hero-title">Products</h1>
          <div className="ec-contact-breadcrumb">
            <Link className="ec-no-underline ec-link-clr" to="/Home">
              Home |{" "}
            </Link>{" "}
            Products
          </div>
        </div>
      </div>
      <div className="ec1-product-page">
        <div className="ec1-sidebar">
          <div className="ec1-filter-box">
            <h3>PRODUCT CATEGORIES</h3>
            {categories.map((category) => (
              <div key={category} className="ec1-filter-item">
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>

          <div className="ec1-filter-box">
            <h3>FILTER BY PRICE</h3>
            <div className="ec1-price-range">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
              <div>Max Price: ${priceRange}</div>
            </div>
          </div>

          <div className="ec1-filter-box">
            <h3>CUSTOMER RATINGS</h3>
            {ratings.map((rating) => (
              <div key={rating} className="ec1-filter-item">
                <input
                  type="checkbox"
                  id={`rating-${rating}`}
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
                <label htmlFor={`rating-${rating}`} className="ec1-star-rating">
                  {"★".repeat(rating)}
                  {"☆".repeat(5 - rating)}
                </label>
              </div>
            ))}
          </div>

          <div className="ec1-filter-box">
            <h3>NUTRITION</h3>
            {nutrition.map((item) => (
              <div key={item} className="ec1-filter-item">
                <input
                  type="checkbox"
                  id={item}
                  checked={selectedNutrition.includes(item)}
                  onChange={() => handleNutritionChange(item)}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>

          <div className="ec1-filter-box">
            <h3>PRODUCT WEIGHT</h3>
            {weights.map((weight) => (
              <div key={weight} className="ec1-filter-item">
                <input
                  type="checkbox"
                  id={weight}
                  checked={selectedWeights.includes(weight)}
                  onChange={() => handleWeightChange(weight)}
                />
                <label htmlFor={weight}>{weight}</label>
              </div>
            ))}
          </div>

          <div className="ec1-filter-box">
            <h3>POPULAR TAGS</h3>
            <div className="tags">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="ec1-product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="ec1-product-card">
              <img src={product.image} alt={product.name} />
              <div className="ec1-product-details">
                <h3>{product.name}</h3>
                <div className="ec1-rating">
                  <span className="ec1-stars">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </span>
                  <span className="ec1-review-count">
                    ({product.reviews} Reviews)
                  </span>
                </div>
                <div className="ec1-price">${product.price.toFixed(2)}</div>
                <Link
                  to={`/product/${product.id}`}
                  className="ec1-view-btn ec-no-underline"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
