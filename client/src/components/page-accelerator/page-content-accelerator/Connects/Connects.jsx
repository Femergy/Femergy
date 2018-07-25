import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../Cards/CardWithShowMoreBtn/CardWithShowMoreBtn';
import Table from '../../../Base/Table/Table';
import MiniCard from '../../../Cards/ItemCards/MiniCard/MiniCard';
import './Connects.scss';

const columns = [
  'Company', 'Market', 'Joined', 'Location', 'Employees',
];

class CorporativeConnects extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title, data } = this.props;
    return (
      <Card title={title} className="connects" disabled>
        <Table columns={columns} headCellClassName="connects__table-head">
          <React.Fragment>
            {data.map(item => (
              <tr>
                <td className="connects__table-cell">
                  <MiniCard
                    {...item}
                    className="connects__mini-card"
                    disabled
                  />
                </td>
                <td className="connects__table-cell">{item.market}</td>
                <td className="connects__table-cell">{item.joined}</td>
                <td className="connects__table-cell">{item.location}</td>
                <td className="connects__table-cell">{item.employees}</td>
              </tr>
            ))}
          </React.Fragment>
        </Table>
      </Card>
    );
  }
}

export default CorporativeConnects;
