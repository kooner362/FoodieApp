import React from 'react';
import Rating from 'react-rating'
import RestaurantTag from '../RestaurantTag'

const Summary = (props) => {
  const { details } = props;

  return (

    <div className="row justify-content-start text-left mb-2 p-4">
      <div className="d-block d-md-flex align-items-center w-100 pb-4">
        <div className="mb-4 mb-md-0 w-100">
          <div className="d-flex justify-content-between">
            <h1 className="mr-3 pb-3 text-black h2">{details.name}</h1>
            <div>
              <div className="restaurant-total-ratings">
                <Rating
                  initialRating={details.avg_rating}
                  emptySymbol="ratings-sidebar fa fa-star-o fa-1x"
                  fullSymbol="ratings-sidebar fa fa-star fa-1x"
                  fractions={2}
                  readonly={true}
                />
                <span className="num-ratings">{details.numRatings} Ratings</span>
              </div>
            </div>
          </div>
          <div className="list-item-body d-block d-md-flex">
            <div className="badge-wrap">
              {details.restauranttags.map((restaurantTag, index) => {
                return (
                  <RestaurantTag key={index} tag={restaurantTag} />
                );
              })}
            </div>
          </div>
          <div className="restaurant-info">
            <p><a href={"https://www.google.com/maps/place/" + details.address} target="_blank">{details.address}</a></p>
            <p><a href={"http://" + details.website} target="_blank">{details.website}</a></p>
            <p>{details.phone_number}</p>
          </div>
        </div>
      </div>
      <div className="row col-md-12 pb-4">
        <p>
          {details.description}
        </p>
      </div>
    </div>
  )
}

export default Summary;