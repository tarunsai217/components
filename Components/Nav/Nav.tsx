import * as React from 'react';
import './Nav.scss';

export default function Nav() {
  const navItems = [
    { name: 'Notification Settings' },
    { name: 'Profile Settings' },
    { name: 'Members & Access' },
  ];
  return (
    <nav className="settings-navbar">
      <ul>
        {navItems.map((navItem) => {
          return (
            <li>
              {' '}
              <span>{navItem.name}</span>{' '}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
