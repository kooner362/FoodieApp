import React, { Component } from "react";
import { connect } from "react-redux";
import NewItemForm from "./NewItemForm";
import NewItemList from "./NewItemList";
import { addNewItemToNewItemList } from "../../actions";
import { reset } from "redux-form";

class AddNewItem extends Component {
  constructor(props) {
    super(props);

    this.restaurants = [];
    this.tags = [];
  }

  handleSubmit = values => {
    let newItem = Object.assign({}, values);
    newItem.restaurantId = this.restaurants[0].restaurantId;
    newItem.approved = false;
    newItem.tags = this.tags;
    this.props.dispatch(addNewItemToNewItemList(newItem));
    this.props.dispatch(reset("newItem"));
  };

  setTags = tags => {
    this.tags = tags;
  };

  setRestaurants = restaurants => {
    this.restaurants = restaurants;
  };

  render() {
    return (

        <div className="site-section bg-light">
          <div className="container">
          <div className="row justify-content-start text-left mb-5">
              <div className="col-md-9">
                <h2 className="font-weight-bold text-black">New Dishes Submission</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-8 mb-5 bg-white">
                <NewItemForm
                  setTags={this.setTags}
                  setRestaurants={this.setRestaurants}
                  onSubmit={this.handleSubmit}
                />
                <NewItemList />
              </div>

              <div className="col-lg-4">
                <div className="p-4 mb-3 bg-white">
                  <h3 className="h5 text-black mb-3">Submission Disclaimer</h3>
                  <p className="mb-4">
                    We thank you for your contribution to Foodie. Your effort is
                    what makes Foodie the #1 food review site on the internet.
                    Please allow up to 48 hours for your submission to be approved
                    and points to be credited to your account. Thanks!
                </p>
                  <p className="mb-0 font-weight-bold">Questions?</p>
                  <p className="mb-0">
                    <a href="#">youremail@domain.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AddNewItem: state.newItems
  };
};

export default connect(mapStateToProps)(AddNewItem);
