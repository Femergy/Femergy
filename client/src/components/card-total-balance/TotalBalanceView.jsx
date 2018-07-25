import React from 'react';
import './TotalBalance.scss';

const TotalBalanceView = props => (
  <section className="total-balance">
    <h3 className="total-balance__title">
      Total Balance
    </h3>
    <div className="total-balance__cash--wrapper">
      <p className="total-balance__fem">
        <span className="total-balance__fem-value">{props.balanceFem}</span>&nbsp;
        <span className="total-balance__cash-name">FEM</span>
      </p>
      <p className="total-balance__usd">
        <span className="total-balance__usd-value">{props.balanceUsd}</span>&nbsp;
        <span className="total-balance__cash-name">USD</span>
      </p>
    </div>
  </section>
);

export default TotalBalanceView;
