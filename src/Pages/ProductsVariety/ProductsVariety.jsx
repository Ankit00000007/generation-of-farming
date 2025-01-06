import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import "./ProductsVariety.css";

const ProductsVariety = () => {
   const { dispatch } = useCart();
   const { id } = useParams();
   const navigate = useNavigate();
   const productId = parseInt(id);

  const products = [
    {
      id: 1,
      name: "Flour",
      varieties: [
        {
          name: "Bansi Gold Wheat Flour",
          price: 30.0,
          image: "/Image/flour/bansi-gold-wheat-flour.jpg",
        },
        {
          name: "Barnyard Millet Flour",
          price: 30.0,
          image: "/Image/flour/barnyard-millet-flour.jpg",
        },
        {
          name: "Barley Flour",
          price: 30.0,
          image: "/Image/flour/barley-flour.jpg",
        },
        {
          name: "Besan",
          price: 30.0,
          image: "/Image/flour/besan.jpg",
        },
        {
          name: "Brown Top Millet Flour",
          price: 30.0,
          image: "/Image/flour/brown-top-millet-flour.jpg",
        },
        {
          name: "Channa Flour",
          price: 30.0,
          image: "/Image/flour/channa-flour.jpg",
        },
        {
          name: "Foxtail Millet Flour",
          price: 30.0,
          image: "/Image/flour/foxtail-millet-flour.jpg",
        },
        {
          name: "Gluten Free Flour",
          price: 30.0,
          image: "/Image/flour/gluten-free-flour.jpg",
        },
        {
          name: "Kodo Flour",
          price: 30.0,
          image: "/Image/flour/kodo-flour.jpg",
        },
        {
          name: "Maize Flour",
          price: 30.0,
          image: "/Image/flour/maize-flour.jpg",
        },
        {
          name: "Multigrain Flour",
          price: 30.0,
          image: "/Image/flour/multigrain-flour.jpg",
        },
        {
          name: "Pearl Flour",
          price: 30.0,
          image: "/Image/flour/pearl-flour.jpg",
        },
        {
          name: "Ragi Flour",
          price: 30.0,
          image: "/Image/flour/ragi-flour.jpg",
        },

        {
          name: "Rice Flour",
          price: 30.0,
          image: "/Image/flour/rice-flour.jpg",
        },
        {
          name: "Sorghum Jowar Flour",
          price: 30.0,
          image: "/Image/flour/sorghum-jowar-flour.jpg",
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
        },
        {
          name: "Chocochip Cookies",
          price: 10.0,
          image: "/Image/cookies/chocochip-cookie.jpg",
        },
        {
          name: "Coconut Cookies",
          price: 10.0,
          image: "/Image/cookies/coconut-cookie.jpg",
        },
        {
          name: "Jowar Cookies",
          price: 10.0,
          image: "/Image/cookies/jowar-cookie.jpg",
        },
        {
          name: "Kangni Cookies",
          price: 10.0,
          image: "/Image/cookies/kangni-cookie.jpg",
        },
        {
          name: "Kodra Cookies",
          price: 10.0,
          image: "/Image/cookies/kodra-cookie.jpg",
        },
        {
          name: "Multigrain Cookies",
          price: 10.0,
          image: "/Image/cookies/multigrain-cookie.jpg",
        },
        {
          name: "Ragi Cookies",
          price: 10.0,
          image: "/Image/cookies/ragi-cookie.jpg",
        },
        // Add more cookie varieties here
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
        },
        {
          name: "Browntop Millet",
          price: 22.0,
          image: "/Image/millets/browntop-millet.jpg",
        },
        {
          name: "Foxtail Millet",
          price: 22.0,
          image: "/Image/millets/foxtail-millet.jpg",
        },
        {
          name: "Kodo Millet",
          price: 22.0,
          image: "/Image/millets/kodo-millet.jpg",
        },
        {
          name: "Little Millet",
          price: 22.0,
          image: "/Image/millets/little-millet.jpg",
        },
        // Add more millet varieties here
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
        },
        {
          name: "Cold Pressure Mustard Oil",
          price: 15.0,
          image: "/Image/oils/cold-pressed-mustard-oil.jpg",
        },
        {
          name: "Groundnut Oil",
          price: 15.0,
          image: "/Image/oils/groundnut-oil.jpg",
        },
        {
          name: "Seasame Oil",
          price: 15.0,
          image: "/Image/oils/seasame-oil.jpg",
        },
        {
          name: "Wood Pressed Mustard Oil",
          price: 15.0,
          image: "/Image/oils/wood-pressed-mustard-oil.jpg",
        },
        {
          name: "Wood Pressed Yellow Mustard Oil",
          price: 15.0,
          image: "/Image/oils/wood-pressed-yellow-mustard-oil.jpg",
        },

        // Add more oil varieties here
      ],
    },
  ];

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

   

  const handleClick = (variety) => {
    navigate(`/purchase/${productId}/${encodeURIComponent(variety.name)}`);
  };

   const handleAddToCart = (variety) => {
     const cartItem = {
       id: `${productId}-${variety.name}`,
       productId: productId,
       name: variety.name,
       price: variety.price,
       image: variety.image,
       quantity: 1,
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
      <div className="ec-contact-hero">
        <h1 className="ec-contact-hero-title">Products Variety</h1>
        <div className="ec-contact-breadcrumb">
          <Link className="ec-no-underline ec-link-clr" to="/Home">
            Home |{" "}
          </Link>{" "}
          Products Variety
        </div>
      </div>
      <div className="ecc-product-page1">
        <div className="ecc-sidebar1">
          {/* Sidebar content can remain the same */}
        </div>
        <div className="ecc-products-grid1">
          {product.varieties.map((variety, index) => (
            <div key={index} className="ecc-product-card1">
              <div
                onClick={() => handleClick(variety)}
                style={{ cursor: "pointer" }}
              >
                <img src={variety.image} alt={variety.name} />
              </div>
              <div className="ecc-product-details1">
                <span className="ecc-product-status1">Fresh</span>
                <h3>{variety.name}</h3>
                <div className="ecc-reviews1">
                  <span className="ecc-stars1">★★★★★</span> (12 Reviews)
                </div>
                <div className="ecc-price-section1">
                  <span className="ecc-old-price1">$90.00</span>
                  <span className="ecc-new-price1">
                    ${variety.price.toFixed(2)}
                  </span>
                </div>
                <button
                  className="ecc-add-to-cart11"
                  onClick={() => handleAddToCart(variety)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsVariety;
