import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../Cart/CartContext";

import "./PurchaseProduct.css";

const PurchaseProduct = () => {
  const { dispatch } = useCart();
  const { productId, varietyName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("50 Ml");
  const [productData, setProductData] = useState(null);

  // Product data (in practice, this should be in a shared data file or context)
  const products = [
    {
      id: 1,
      name: "Flour",
      varieties: [
        {
          name: "Bansi Gold Wheat Flour",
          price: 30.0,
          image: "/Image/flour/bansi-gold-wheat-flour.jpg",
          description: "Premium quality wheat flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Barnyard Millet Flour",
          price: 30.0,
          image: "/Image/flour/barnyard-millet-flour.jpg",
          description:
            "Premium quality barnyard millet flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Barley Flour",
          price: 30.0,
          image: "/Image/flour/barley-flour.jpg",
          description:
            "Premium quality barley flour flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Besan",
          price: 30.0,
          image: "/Image/flour/besan.jpg",
          description: "Premium quality besan flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Brown Top Millet Flour",
          price: 30.0,
          image: "/Image/flour/brown-top-millet-flour.jpg",
          description:
            "Premium quality brown top millet flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Channa Flour",
          price: 30.0,
          image: "/Image/flour/channa-flour.jpg",
          description:
            "Premium quality channa flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Foxtail Millet Flour",
          price: 30.0,
          image: "/Image/flour/foxtail-millet-flour.jpg",
          description:
            "Premium quality foxtail millet flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Gluten Free Flour",
          price: 30.0,
          image: "/Image/flour/gluten-free-flour.jpg",
          description:
            "Premium quality gluten free flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Kodo Flour",
          price: 30.0,
          image: "/Image/flour/kodo-flour.jpg",
          description: "Premium quality kodo flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Maize Flour",
          price: 30.0,
          image: "/Image/flour/maize-flour.jpg",
          description: "Premium quality maize flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Multigrain Flour",
          price: 30.0,
          image: "/Image/flour/multigrain-flour.jpg",
          description:
            "Premium quality multigrain flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Pearl Flour",
          price: 30.0,
          image: "/Image/flour/pearl-flour.jpg",
          description: "Premium quality pearl flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Ragi Flour",
          price: 30.0,
          image: "/Image/flour/ragi-flour.jpg",
          description: "Premium quality ragi flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Rice Flour",
          price: 30.0,
          image: "/Image/flour/rice-flour.jpg",
          description: "Premium quality rice flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
        {
          name: "Sorghum Jowar Flour",
          price: 30.0,
          image: "/Image/flour/sorghum-jowar-flour.jpg",
          description:
            "Premium quality sorghum Jowar flour for all your baking needs.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.5,
          reviews: 12,
        },
      ],
    },
    {
      id: 2,
      name: "Cookies",
      varieties: [
        {
          name: "Bajra Cookies",
          price: 10.0,
          image: "/Image/cookies/bajra-cookie.jpg",
          description: "Healthy and delicious Bajra cookies.",
          sizes: ["250g", "500g", "1kg"],
          rating: 4.0,
          reviews: 8,
        },
        {
          name: "Chocochip Cookies",
          price: 10.0,
          image: "/Image/cookies/chocochip-cookie.jpg",
          description: "Healthy and delicious Chocochip cookies.",
          sizes: ["250g", "500g", "1kg"],
          rating: 4.0,
          reviews: 8,
        },
        {
          name: "Coconut Cookies",
          price: 10.0,
          image: "/Image/cookies/coconut-cookie.jpg",
          description: "Healthy and delicious Coconut cookies.",
          sizes: ["250g", "500g", "1kg"],
          rating: 4.0,
          reviews: 8,
        },
        {
          name: "Jowar Cookies",
          price: 10.0,
          image: "/Image/cookies/jowar-cookie.jpg",
          description: "Healthy and delicious Jowar cookies.",
          sizes: ["250g", "500g", "1kg"],
          rating: 4.0,
          reviews: 8,
        },
        {
          name: "Kangni Cookies",
          price: 10.0,
          image: "/Image/cookies/kangni-cookie.jpg",
          description: "Healthy and delicious Kangni cookies.",
          sizes: ["250g", "500g", "1kg"],
          rating: 4.0,
          reviews: 8,
        },
        {
          name: "Kodra Cookies",
          price: 10.0,
          image: "/Image/cookies/kodra-cookie.jpg",
          description: "Healthy and delicious Kodra cookies.",
          sizes: ["250g", "500g", "1kg"],
          rating: 4.0,
          reviews: 8,
        },
        {
          name: "Multigrain Cookies",
          price: 10.0,
          image: "/Image/cookies/multigrain-cookie.jpg",
          description: "Healthy and delicious Multigrain cookies.",
          sizes: ["250g", "500g", "1kg"],
          rating: 4.0,
          reviews: 8,
        },
        {
          name: "Ragi Cookies",
          price: 10.0,
          image: "/Image/cookies/ragi-cookie.jpg",
          description: "Healthy and delicious Ragi cookies.",
          sizes: ["250g", "500g", "1kg"],
          rating: 4.0,
          reviews: 8,
        },
      ],
    },
    {
      id: 3,
      name: "Millet",
      varieties: [
        {
          name: "Barnyard Millet",
          price: 20.0,
          image: "/Image/millets/barnyard-millet.jpg",
          description: "Nutritious barnyard millet for a healthy diet.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.2,
          reviews: 15,
        },
        {
          name: "Browntop Millet",
          price: 22.0,
          image: "/Image/millets/browntop-millet.jpg",
          description: "Nutritious browntop millet for a healthy diet.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.2,
          reviews: 15,
        },
        {
          name: "Foxtail Millet",
          price: 22.0,
          image: "/Image/millets/foxtail-millet.jpg",
          description: "Nutritious foxtail millet for a healthy diet.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.2,
          reviews: 15,
        },
        {
          name: "Kodo Millet",
          price: 22.0,
          image: "/Image/millets/kodo-millet.jpg",
          description: "Nutritious kodo millet for a healthy diet.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.2,
          reviews: 15,
        },
        {
          name: "Little Millet",
          price: 22.0,
          image: "/Image/millets/little-millet.jpg",
          description: "Nutritious little millet for a healthy diet.",
          sizes: ["500g", "1kg", "2kg"],
          rating: 4.2,
          reviews: 15,
        },
        // ... other millet varieties
      ],
    },
    {
      id: 4,
      name: "Oil",
      varieties: [
        {
          name: "Coconut Oil",
          price: 15.0,
          image: "/Image/oils/coconut-oil.jpg",
          description: "Pure and natural coconut oil.",
          sizes: ["50 Ml", "1L", "2L"],
          rating: 4.5,
          reviews: 54,
        },
        {
          name: "Cold Pressure Mustard Oil",
          price: 15.0,
          image: "/Image/oils/cold-pressed-mustard-oil.jpg",
          description: "Pure and natural cold pressed mustard oil.",
          sizes: ["50 Ml", "1L", "2L"],
          rating: 4.5,
          reviews: 54,
        },
        {
          name: "Groundnut Oil",
          price: 15.0,
          image: "/Image/oils/groundnut-oil.jpg",
          description: "Pure and natural groundnut oil.",
          sizes: ["50 Ml", "1L", "2L"],
          rating: 4.5,
          reviews: 54,
        },
        {
          name: "Seasame Oil",
          price: 15.0,
          image: "/Image/oils/seasame-oil.jpg",
          description: "Pure and natural seasame oil.",
          sizes: ["50 Ml", "1L", "2L"],
          rating: 4.5,
          reviews: 54,
        },
        {
          name: "Wood Pressed Mustard Oil",
          price: 15.0,
          image: "/Image/oils/wood-pressed-mustard-oil.jpg",
          description: "Pure and natural wood pressed mustard oil.",
          sizes: ["50 Ml", "1L", "2L"],
          rating: 4.5,
          reviews: 54,
        },
        {
          name: "Wood Pressed Yellow Mustard Oil",
          price: 15.0,
          image: "/Image/oils/wood-pressed-yellow-mustard-oil.jpg",
          description: "Pure and natural wood pressed yellow mustard oil.",
          sizes: ["50 Ml", "1L", "2L"],
          rating: 4.5,
          reviews: 54,
        },
        // ... other oil varieties
      ],
    },
  ];

  useEffect(() => {
    if (productId && varietyName) {
      const product = products.find((p) => p.id === parseInt(productId));
      if (product) {
        const variety = product.varieties.find(
          (v) => v.name === decodeURIComponent(varietyName)
        );
        if (variety) {
          setProductData({
            ...variety,
            category: product.name,
          });
        }
      }
    }
  }, [productId, varietyName]);

  const RatingStars = ({ rating }) => {
    return (
      <div className="ec2-stars">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? "ec2-filled" : "ec2-empty"}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  const relatedProducts =
    products
      .find((p) => p.id === parseInt(productId))
      ?.varieties.filter((v) => v.name !== decodeURIComponent(varietyName))
      .slice(0, 4)
      .map((v) => ({
        ...v,
        originalPrice: v.price * 1.2,
        discount: 20,
      })) || [];
  
  const handleAddToCart = (productData) => {
    const cartItem = {
      id: `${productId}-${productData.name}`,
      productId: productId,
      name: productData.name,
      price: productData.price,
      image: productData.image,
      quantity: quantity, // Use the quantity state
      size: selectedSize,
    };

    dispatch({
      type: "ADD_TO_CART",
      payload: cartItem,
    });

    // Optional: You could show a success message here
    alert("Item added to cart!"); // Or use a more sophisticated notification system
  };

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
      <div className="ec2-container">
        <div className="ec2-breadcrumb">
          <Link to="/" className="ec-no-underline">
            Home
          </Link>{" "}
          {" / "}
          <Link to="/products" className="ec-no-underline">
            Products
          </Link>{" "}
          {" / "}
          <Link to={`/product/${productId}`} className="ec-no-underline">
            {productData.category}
          </Link>{" "}
          {" / "}
          {productData.name}
        </div>

        <div className="ec2-product-grid1">
          <div className="ec2-product-images">
            <div className="ec2-main-image-container">
              <img
                src={productData.image}
                alt={productData.name}
                className="ec2-main-image"
              />
            </div>
            <div className="ec2-thumbnail-container">
              <img
                src={productData.image}
                alt="Thumbnail"
                className="ec2-thumbnail"
              />
            </div>
          </div>

          <div className="ec2-product-info">
            <h1 className="ec2-product-title">{productData.name}</h1>
            <div className="ec2-price-rating">
              <span className="ec2-price">${productData.price.toFixed(2)}</span>
              <div className="ec2-rating-container">
                <RatingStars rating={productData.rating} />
                <span className="ec2-review-count">
                  ({productData.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="ec2-text-gray">{productData.description}</p>

            <div>
              <h3 className="ec2-size-label">SIZE</h3>
              <div className="ec2-size-options">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    className={`ec2-size-button ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="ec2-size-label">QUANTITY</h3>
              <div className="ec2-quantity-container">
                <button
                  className="ec2-quantity-button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="ec2-quantity-value">{quantity}</span>
                <button
                  className="ec2-quantity-button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <h3 className="ec2-size-label">SHARE THIS:</h3>
              <div className="ec2-share-buttons">
                <button className="ec2-share-button">FB</button>
                <button className="ec2-share-button">TW</button>
              </div>
            </div>

            <button
              onClick={() => handleAddToCart(productData)}
              className="ec2-add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="ec2-section-title">Related Products</h2>
          <div className="ec2-related-products-grid">
            {relatedProducts.map((product) => (
              <div key={product.name} className="ec2-product-card1">
                <span className="ec2-discount-badge">-{product.discount}%</span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="ec2-product-image"
                />
                <h3 className="ec2-product-name">{product.name}</h3>
                <div className="ec2-product-price">
                  <RatingStars rating={product.rating} />
                  <div>
                    <span className="ec2-original-price">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="ec2-sale-price">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
