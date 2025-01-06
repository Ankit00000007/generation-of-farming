import React, { useState } from 'react';

const StarRating = ({ rating }) => {
  return (
    <div style={{ 
      color: '#ffd700', 
      display: 'flex', 
      gap: '2px',
      marginBottom: '8px'
    }}>
      {[...Array(5)].map((_, index) => (
        <span key={index}>{index < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Cabbage',
      rating: 3,
      currentPrice: 19.00,
      originalPrice: 23.75,
      discount: 20,
      category: 'VEGETABLES',
      image: '/Image/fruit-4-2-600x750.jpg'
    },
    {
      id: 2,
      name: 'Brokoli',
      rating: 3,
      currentPrice: 19.00,
      originalPrice: 27.14,
      discount: 30,
      category: 'VEGETABLES',
      image: '/Image/fruit-4-2-600x750.jpg'
    },
    {
      id: 3,
      name: 'Chicken',
      rating: 3,
      currentPrice: 25.00,
      originalPrice: 31.25,
      discount: 20,
      category: 'MEAT',
      image: '/Image/fruit-4-2-600x750.jpg'
    },
    {
      id: 4,
      name: 'Cucumber',
      rating: 3,
      currentPrice: 10.00,
      originalPrice: 12.50,
      discount: 20,
      category: 'VEGETABLES',
      image: '/Image/fruit-4-2-600x750.jpg'
    }
  ];

  const categories = ['ALL', 'FRUIT', 'MILKS & DAIRIES', 'VEGETABLES', 'MEAT'];
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredProducts = selectedCategory === 'ALL' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 16px',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  };

  const categoriesStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '32px',
  };

  const buttonStyles = (isActive) => ({
    padding: '8px 16px',
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    background: isActive ? '#000' : 'transparent',
    color: isActive ? '#fff' : '#000',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  const cardStyles = {
    position: 'relative',
    background: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  const discountStyles = {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: '#ff3366',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
  };

  return (
    <div style={containerStyles}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px' }}>
        Most Popular Products
      </h2>

      <div style={categoriesStyles}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={buttonStyles(selectedCategory === category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={gridStyles}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={cardStyles}>
            <span style={discountStyles}>-{product.discount}%</span>
            <img 
              src={product.image}
              alt={product.name}
              style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', background: '#f5f5f5' }}
            />
            <div style={{ padding: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>
                {product.name}
              </h3>
              <StarRating rating={product.rating} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
                  ${product.currentPrice.toFixed(2)}
                </span>
                <span style={{ color: '#999', textDecoration: 'line-through', fontSize: '14px' }}>
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ProductGrid;