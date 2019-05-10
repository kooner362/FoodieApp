import React from "react";
import { Component } from "react";
import { removeNewItemToNewItemList } from "../../actions";
import { connect } from "react-redux";

class MenuItemRow extends Component {
  constructor(props) {
    super(props);

    this.state = { modalShow: false };
  }

  deleteHandler = () => {
    this.props.dispatch(removeNewItemToNewItemList(this.props.item));
  };

  render() {
    return (
      <tr>
        <th scope="row">{this.props.index + 1}</th>
        <td>{this.props.name}</td>
        <td>
          {this.props.tags.map((tag, index) => {
            return (
              <span key={index} className="badge badge-success">
                {tag.name}
              </span>
            );
          })}
        </td>
        <td>
          <button
            type="button"
            onClick={this.deleteHandler}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    newItems: state.newItems
  };
};

export default connect(mapStateToProps)(MenuItemRow);
