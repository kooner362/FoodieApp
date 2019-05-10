import React, { Component } from 'react';
import Tag from './Tag';
import { Link } from 'react-router-dom'

class ApproveRestaurantListItem extends Component {
  constructor(props) {
    super(props);
    this.restaurant = props.restaurant;
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="list-item bg-white p-4 d-block d-md-flex align-items-center">
            <div className="thumbnail-wrap">
              <img src="images/thumbnail_1.jpg" alt="" className="list-item-thumbnail" />
            </div>
            <div className="mb-4 mb-md-0 mr-5">
              <div className="list-item-header d-flex align-items-center">
                <h2 className="mr-3 text-black h4"><Link to={`/restaurant/${this.restaurant.id}`}>{this.restaurant.name}</Link></h2>
                <div className="badge-wrap">
                  {this.restaurant.restauranttags.map(restaurantTag => {
                    return (
                      <Tag tag={restaurantTag} />
                    );
                  })}
                </div>
              </div>
              <div className="list-item-body d-block d-md-flex">
                <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">{this.restaurant.address}</a>
                </div>
              </div>
            </div>
            <div className="ml-auto">
                <div className="d-flex justify-content-around pb-4">
                  <a href="#" onClick={(e) => {this.props.handleApproval(e, this.restaurant.id)}} className="approval-btns btn btn-secondary btn-sm" data-toggle="modal" data-target="#exampleModalCenter">Approve</a>
                  <a href="#" onClick={(e) => {this.props.handleReject(e, this.restaurant.id)}}className="btn btn-danger btn-sm">Reject</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ApproveRestaurantListItem;