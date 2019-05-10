import ApproveDishListView from '../ApproveDishListView';
import React, {Component} from 'react';
import axios from 'axios';
const apiUrl = 'http://localhost:3001';
import { connect } from 'react-redux';
import { fetchAllDishes } from '../../actions/index';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {dishes: []};
        this.handleApproval = this.handleApproval.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    componentDidMount() {
        return axios.get(`${apiUrl}/unapproveditems`)
          .then(response => {
            this.setState({dishes: response.data})
          })
          .catch(error => {
            throw (error);
          });
      }
    
      handleApproval = (event, id) => {
        event.preventDefault();
        return axios.patch(`${apiUrl}/item/${id}`, {approved: true})
          .then((response) => {
            this.setState((prevState) => {
              let dishes = prevState.dishes;
              let new_dishes = [];
              for(let i=0; i < dishes.length; i++) {
                if (dishes[i].id !== id) {
                  new_dishes.push(dishes[i]);
                }
              }
              this.props.dispatch(fetchAllDishes());
              return {dishes: new_dishes};
            });
          })
          .catch(error => {
            throw (error);
          });
      }
    
      handleReject = (event, id) => {
        event.preventDefault();
        return axios.delete(`${apiUrl}/item/${id}`)
          .then((response) => {
            this.setState((prevState) => {
              let dishes = prevState.dishes;
              let new_dishes = [];
              for(let i=0; i < dishes.length; i++) {
                if (dishes[i].id !== id) {
                  new_dishes.push(dishes[i]);
                }
              }
              return {dishes: new_dishes};
            });
          })
          .catch(error => {
            throw (error);
          });
      }
  
    render() {
        return (
            <div className="site-section bg-light">
              <div className="container">
                <div className="row justify-content-start text-left mb-5">
                  <div className="col-md-9">
                    <h2 className="font-weight-bold text-black">Approve Dishes</h2>
                  </div>
                </div>
                <ApproveDishListView handleReject={this.handleReject} handleApproval={this.handleApproval} dishes={this.state.dishes} />
              </div>
            </div>
          );
    };
  
};

const mapStateToProps = state => {
  return {
    dishes: state.dishes.dishes
  };
};

export default connect(
  mapStateToProps
)(MainView);