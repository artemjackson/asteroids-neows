import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { lookupAsteroidById } from '../../actions';
import { getAsteroid } from '../../selectors';
import Details from './Details';

const stateToProps = createStructuredSelector({
  asteroid: getAsteroid
});

const dispatchToProps = {
  lookupAsteroidById
};

@connect(stateToProps, dispatchToProps)
@withRouter
export default class DetailsConatiner extends Component {
  async componentDidMount() {
    try {
      await this.props.lookupAsteroidById(this.props.params.id);
    } catch (error) {
      if (error.status === 404) {
        this.props.router.push('/NotFound');
      }
    }
  }

  render() {
    const { asteroid } = this.props;

    return (
      <Details asteroid={asteroid} />
    );
  }
};
