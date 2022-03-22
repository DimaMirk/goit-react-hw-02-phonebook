import { Component } from 'react';
import propTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input onChange={this.props.addFilterValue} />
      </>
    );
  }
}

export default Filter;

Filter.propTypes = {
  addFilterValue: propTypes.func,
};
