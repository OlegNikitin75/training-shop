import React from 'react';
const ratings = [undefined, undefined, undefined, undefined, undefined];

const CardRating = ({ratingItem}) => {
  return (
    <div className="card__rating">
      {
        ratings.map((rating, index) =>
          <div className="card__rating-item"
               key={`star${index}`}>
            {
              <div
                className={(index + 1 <= ratingItem)
                  ? "card__rating-star--fill"
                  : "card__rating-star"}
              />
            }
          </div>
        )
      }
    </div>
  );
};

export default CardRating;
