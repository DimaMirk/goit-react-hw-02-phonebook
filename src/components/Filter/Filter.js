import { Component } from 'react';

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
