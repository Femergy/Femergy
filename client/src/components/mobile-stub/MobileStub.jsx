import React from 'react';
import './MobileStub.scss';
import Logo from '../logo/Logo';

class MobileStub extends React.Component {
  render() {
    return (
      <div className="mobile-stub">
        <header className="mobile-stub__header">
          <Logo big />
        </header>
        <div className="mobile-stub__body">
          <h2>Coming Soon</h2>
          <p>
            Femergy Alpha is only availiable for desktop.
            We are launching mobile version very soon.
            Please come back later. 
          </p>
        </div>
      </div>
    );
  }
}

export default MobileStub;
