import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { withRouter } from "react-router-dom"

class AutoSuggest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      dishes: []
    };

    this.fetchAllRestaurantDishes();
  }

  fetchAllRestaurantDishes = () => {
    const restaurantId = this.props.location.pathname.split('/restaurant/')[1];

    axios.get(`http://localhost:3001/restaurants/${restaurantId}/items`)
      .then(response => {
        this.setState({ dishes: response.data })
      })
      .catch(error => {
        throw (error);
      });
  };

  escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  getSuggestions = value => {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    const suggestions = this.state.dishes.filter(dish => regex.test(dish.name));

    if (suggestions.length === 0) {
      return [
        { isAddNew: true }
      ];
    }

    return suggestions;
  }

  onChange = (event, { newValue, method }) => {
    if (newValue === '') {
      this.props.selection([]);
    }
    this.setState({
      value: newValue
    });
  };

  getSuggestionValue = suggestion => {
    if (suggestion.isAddNew) {
      return this.state.value;
    }

    return suggestion.name;
  };

  renderSuggestion = suggestion => {
    if (suggestion.isAddNew) {
      return (
        <span>
          [+] Add new: <strong>{this.state.value}</strong>
        </span>
      );
    }

    return suggestion.name;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    event.preventDefault();

    if (suggestion.isAddNew) {
      console.log('Add new:', this.state.value);
    } else {
      this.props.selection(suggestion);
    }
    this.setState({
      value: ''
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search for dish",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        onSuggestionSelected={this.onSuggestionSelected}
        inputProps={inputProps}
      />
    );
  }
}

export default withRouter(AutoSuggest);