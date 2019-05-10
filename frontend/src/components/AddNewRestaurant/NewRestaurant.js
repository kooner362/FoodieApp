import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Redirect } from 'react-router-dom';

class NewRestaurant extends Component {

  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }
  }

  onSubmit = values => {
    axios.post("http://localhost:3001/restaurants", values);
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state

    return (

      <Fragment>
        {redirect && (<Redirect to="/success" />)}
        <div className="site-section bg-light">
          <div className="container">
            <div className="row justify-content-start text-left mb-5">
              <div className="col-md-9">
                <h2 className="font-weight-bold text-black">New Restaurant Submission</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-8 mb-5">
                <NewRestaurantForm onSubmit={this.onSubmit} />{" "}
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
      </Fragment>
    );
  }

};

let NewRestaurantForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="p-5 bg-white" onSubmit={handleSubmit}>
      <div className="row form-group">
        <div className="col-md-12 mb-3 mb-md-0">
          <label className="font-weight-bold" htmlFor="name">
            Name
          </label>
          <Field
            name="name"
            component="input"
            type="text"
            id="fullname"
            className="form-control"
            placeholder="Name"
          />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="font-weight-bold" htmlFor="text">
            Address
          </label>
          <Field
            name="address"
            component="input"
            type="text"
            id="text"
            className="form-control"
            placeholder="eg. 1234 Main Street, Vancouver"
          />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="font-weight-bold" htmlFor="text">
            Phone Number
          </label>
          <Field
            name="phone_number"
            component="input"
            type="text"
            id="text"
            className="form-control"
            placeholder="eg. (xxx) xxx xxxx"
          />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="font-weight-bold" htmlFor="text">
            Website
          </label>
          <Field
            name="website"
            component="input"
            type="text"
            id="text"
            className="form-control"
            placeholder="example.com"
          />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="font-weight-bold" htmlFor="message">
            Description
          </label>
          <Field
            name="description"
            component="textarea"
            id="message"
            cols="30"
            rows="5"
            className="form-control"
            placeholder="Description"
          />
        </div>
      </div>

      <div className="col-md-12 py-3 mt-3 d-block d-md-flex justify-content-center">
        <button type="submit" className="btn btn-primary  py-2 px-4">
          Submit
        </button>
      </div>
    </form>
  );
};

NewRestaurantForm = reduxForm({
  form: "NewRestaurant"
})(NewRestaurantForm);

export default NewRestaurant;
