import React, { useState } from 'react';
import './Rating.scss';
import Star from './RatingAssets/Star';
export default function Rating() {
  const [rating, setRating] = useState('');

  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {stars.map((item) => {
        console.log('filled', item, item <= rating);
        return (
          <Star
            // style={item <= rating && { fill: 'blue' }}
            style={{ fill: 'blue' }}
            fill={item <= rating ? '#FFD645' : '#DED8E6'}
            item={item}
            setRating={setRating}
            rating={rating}
            key={item}
          />
        );
      })}
      <span className="rating-number">{rating ? `${rating} Star` : ' - '}</span>
    </div>
  );
}
