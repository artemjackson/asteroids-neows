import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { fetchAsteroids } from '../../actions';
import { getAsteroids, getAreAsteroidsFetching, gaetPagination } from '../../selectors';
import Summary from './Summary';

const stateToProps = createStructuredSelector({
  asteroids: getAsteroids,
  areAsteroidsFetching: getAreAsteroidsFetching,
  pagination: gaetPagination
});
const dispatchToProps = {
  fetchAsteroids
};

@withRouter
@connect(stateToProps, dispatchToProps)
export default class SummaryContainer extends Component {
  constructor(props) {
    super(props);

    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount() {
    const { page, size } = this.props.location.query;
    this.props.fetchAsteroids({ page, size });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location === newProps.location) return;

    const { page, size } = newProps.location.query;
    this.props.fetchAsteroids({ page, size });
  }

  showDetails(asteroid) {
    this.props.router.push(`/details/${asteroid.neo_reference_id}`);
  }

  render() {
    const { size } = this.props.location.query;
    return (
      <Summary
        itemsPerPage={size}
        onAsteroidSelect={this.showDetails}
        {...this.props}
      />
    );
  }
}
