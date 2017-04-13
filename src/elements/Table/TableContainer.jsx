import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Preloader from 'elements/Preloader';
import { sortBy, SortOrder, SortOrders } from './sort';
import THeadContainer from './THeadContainer';
import Table from './Table';

import styles from './styles';

export default class TableConatiner extends Component {
  static propTypes = {
    className: PropTypes.string,
    loading: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    onEntryClick: PropTypes.func
  }

  constructor(props) {
    super(props);

    const { children } = props;
    const { field: sortField } = children.find(c => c.props.sort) || {};

    const sortOrder = sortField ? SortOrder.next() : SortOrder.initial();

    this.state = {
      sortField,
      sortOrder
    };

    this.onTHeadClick = this.onTHeadClick.bind(this);
  }

  onTHeadClick(field) {
    const { sortField } = this.state;

    if (sortField === field) {
      return this.toggleSortOrder(field);
    }

    SortOrder.initial();

    this.setState({
      sortField: field,
      sortOrder: SortOrder.next()
    })
  }

  toggleSortOrder(field) {
    this.setState({ sortOrder: SortOrder.next() })
  }

  render() {
    const { className, loading, children, items, onEntryClick } = this.props;
    const { sortField, sortOrder } = this.state;

    const count = children.length;
    const fields = children.map(c => c.props.field);

    let sortedItems = items;

    if (sortField) {
      if (sortOrder !== SortOrders.NOT_SORTED) {
        sortedItems = sortBy(items, sortField, sortOrder);
      }
    }

    return (
      <div className={cx(styles.container, className)}>
        <Table
          items={sortedItems}
          fields={fields}
          onEntryClick={onEntryClick}
        >
          {children.map((child, index) => {
            const {
              props: { field }
            } = child;
            
            return (
              <THeadContainer
                key={index}
                field={field}
                sortOrder={sortField === field ? sortOrder : SortOrders.NOT_SORTED}
                onClick={this.onTHeadClick}
              >
                {child}
              </THeadContainer>
            );
          })}
        </Table>
        <div className={styles.preloader}>
          {loading && <Preloader />}
        </div>
      </div>
    );
  }
}
