import React from "react";
import { connect } from "react-redux";
import MenuItemRow from "./MenuItemRow";
import { Component, Fragment } from "react";
import { postMenuItemsToServer } from "../../util/index.js";
import { removeAllSubmittedMenuItems } from '../../actions/index';
import { Redirect } from 'react-router-dom';

class NewItemListTable extends Component {

  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }
  }

  handleOnSubmit = e => {
    e.preventDefault();
    postMenuItemsToServer(this.props.newItems.menuItem);
    this.setState({ redirect: true });
    this.props.dispatch(removeAllSubmittedMenuItems());
  };

  render() {
    const { redirect } = this.state

    if (this.props.newItems.menuItem.length) {
      return (

        <Fragment>
          {redirect && (<Redirect to="/success" />)}
          <div className="row p-5">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th className="w-5">#</th>
                  <th className="w-25">Dish</th>
                  <th className="w-25">Tags</th>
                  <th className="w-15" />
                </tr>
              </thead>
              <tbody>
                {this.props.newItems.menuItem.map((item, index) => {
                  return (
                    <MenuItemRow
                      key={index}
                      index={index}
                      name={item.name}
                      tags={item.tags}
                      item={item}
                    />
                  );
                })}
              </tbody>
            </table>

            <div className="col-md-12 py-3 mt-3 d-block d-md-flex justify-content-center">
              <button
                onClick={this.handleOnSubmit}
                className="btn btn-primary  py-2 px-4"
              >
                Submit
            </button>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    newItems: state.newItems
  };
};

export default connect(mapStateToProps)(NewItemListTable);
