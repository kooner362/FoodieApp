import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Rating from 'react-rating'

class EditRatingModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 0,
    }
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Rating
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Restaurant:</Form.Label>
              <Form.Control type="text" value={this.props.rating.menuitem.restaurant.name} disabled />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Dish:</Form.Label>
              <Form.Control type="text" value={this.props.rating.menuitem.name} disabled />
            </Form.Group>
          </Form>
          <div className="row d-flex w-100 p-4 justify-content-center">
            <div className="my-auto">
              <h4 className="font-weight-bold text-black">Your Rating: </h4>
            </div>
            <div>
              <Rating
                initialRating={this.state.value}
                emptySymbol="ratings-add-section fa fa-star-o fa-2x"
                fullSymbol="ratings-add-section fa fa-star fa-2x"
                fractions={2}
                onChange={(value) => this.setState({ value: value })}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { this.props.submitEditRating(this.props.rating, this.state.value); this.props.onHide() }}>Submit</Button>
          <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditRatingModal;