import React, { useState } from 'react';
import './SideNavigation.scss';
import NavIcon from './SideNavigationAssets/NavIcon';
import bookherelogo from './SideNavigationAssets/bookherelogo';

export default function SideNavigation() {
  const [active, setActive] = useState('Tab 3');
  const navItems = [{ name: 'Tab 1' }, { name: 'Tab 2' }, { name: 'Tab 3' }];
  return (
    <div className="side-navigation">
      <div className="nav-heading">
        <img src={bookherelogo} />
        <span>Book Here</span>
      </div>
      <div className="nav-items">
        {navItems.map((item, index) => {
          return (
            <NavItem
              key={index}
              item={item}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </div>
      <div className="nav-footer"></div>
    </div>
  );
}

function NavItem({ item, active, setActive }) {
  const { name } = item;
  const activeStatus = name == active;
  console.log('item', item);
  const onClickHandler = () => {
    setActive(name);
  };
  return (
    <div
      onClick={onClickHandler}
      className={activeStatus ? 'nav-item nav-item-active' : 'nav-item'}
    >
      <NavIcon />
      <span className="name">{name}</span>
    </div>
  );
}
