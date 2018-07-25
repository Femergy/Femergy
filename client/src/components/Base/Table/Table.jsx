import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Table.scss';

export default class Table extends React.Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.node.isRequired,
    headCellClassName: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    headCellClassName: null,
    className: null,
  }

  render() {
    const { children, className, columns, headCellClassName, headClassName } = this.props;
    const tableHead = columns.map(column => (
      <th className={classNames('base-table__head-cell', headCellClassName)}>{column}</th>
    ));
    return (
      <table className={classNames('base-table', className)}>
        <tr>
          {tableHead}
        </tr>
        {children}
      </table>
    );
  }
}

