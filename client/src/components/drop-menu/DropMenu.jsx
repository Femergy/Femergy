import React from 'react';
import { Link } from 'react-router-dom';
import './DropMenu.scss';

class DropMenu extends React.Component {
  render() {
    const menuItems = this.props.items.map(item => (
      <button className="drop-menu__link--wrapper" onClick={item.onClick} key={item.key}>
        { item.to ?
          <Link to={item.to} className="drop-menu__menu-item">
            <p>{item.title}</p>
            <div className="drop-menu__menu-icon">
              <img src={item.icon} alt={item.title} />
            </div>
          </Link> :
          <div className="drop-menu__menu-item">
            <p>{item.title}</p>
            <div className="drop-menu__menu-icon">
              <img src={item.icon} alt={item.title} />
            </div>
          </div>
        }
      </button>));

    return (
      <div className="drop-menu">
        {menuItems}
      </div>
    );
  }
}

export default DropMenu;
