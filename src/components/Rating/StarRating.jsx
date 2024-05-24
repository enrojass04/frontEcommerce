import React, { useState, useEffect } from 'react';
import { createRatingService, getRatingsByProductService } from '../../services/RatingService';

const StarRating = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    // Obtener calificaciones del producto al cargar el componente
    const fetchRatings = async () => {
      try {
        const ratings = await getRatingsByProductService(productId);
        if (ratings.length > 0) {
          const avgRating = ratings.reduce((acc, rating) => acc + rating.value, 0) / ratings.length;
          setRating(avgRating);
        }
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };

    fetchRatings();
  }, [productId]);

  const handleRating = async (value) => {
    try {
      await createRatingService({ value, id_product: productId });
      setRating(value);
    } catch (error) {
      console.error("Error creating rating:", error);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
