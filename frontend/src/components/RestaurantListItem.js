import React from 'react';
import RestaurantTag from './RestaurantTag'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

export default ({ restaurant: { name, address, avg_rating, restauranttags, id } }) => {
  return (
    <div className="row">
      <div className="col-md-12">

        <div className="list-item bg-white p-4 d-block d-md-flex align-items-center">
          <div className="thumbnail-wrap">
            <img src="" alt="" className="list-item-thumbnail" />
          </div>
          <div className="mb-4 mb-md-0 mr-5">
            <div className="list-item-header d-flex align-items-center">
              <h2 className="mr-3 text-black h4"><Link to={`/restaurant/${id}`}>{name}</Link></h2>
              <div className="badge-wrap">
                {restauranttags.map((restaurantTag, index) => {
                  return (
                    <RestaurantTag key={index} tag={restaurantTag} />
                  );
                })}
              </div>
            </div>
            <div className="list-item-body d-block d-md-flex">
              <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">{address}</a>
              </div>
            </div>
          </div>

          <div className="ml-auto">
          <Rating
                readonly={true}
                initialRating={parseFloat(avg_rating)}
                fullSymbol="list-rating fa fa-star"
                emptySymbol="list-rating fa fa-star-o"
                fractions={2}
              />
          </div>
        </div>
      </div>
    </div>
  );
};