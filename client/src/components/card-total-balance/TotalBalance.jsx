import React from 'react';
import TotalBalanceView from './TotalBalanceView';

class TotalBalance extends React.Component {
  render() {
    return (
      <TotalBalanceView {...this.props} balanceFem={0} balanceUsd={0} />
    );
  }
}

export default TotalBalance;
