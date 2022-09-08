import React, { useState } from 'react';
import './SideNav.scss';
import userImage from '../SideNavAssets/userimage.svg';
import logo from '../SideNavAssets/logo.svg';
import smallLogo from '../SideNavAssets/smallLogo.svg';
import dashboard from '../SideNavAssets/dashboard.svg';
import communication from '../SideNavAssets/communication.svg';
import leads from '../SideNavAssets/leads.svg';
import itenary from '../SideNavAssets/itenary.svg';
import suppliers from '../SideNavAssets/suppliers.svg';
import payment from '../SideNavAssets/payment.svg';
import ticket from '../SideNavAssets/ticket.svg';
import calendar from '../SideNavAssets/calendar.svg';
import logout from '../SideNavAssets/logout.svg';
import notification from '../SideNavAssets/notification.svg';
import settings from '../SideNavAssets/settings.svg';

import expandIcon from '../SideNavAssets/expand';
import collapseIcon from '../SideNavAssets/collapse';
import { useState } from 'react';

export default function SideNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: dashboard },
    { name: 'Communication', icon: communication },
    { name: 'Leads', icon: leads },
    { name: 'Itenary', icon: itenary },
    { name: 'Suppliers', icon: suppliers },
    { name: 'Payment', icon: payment },
    { name: 'Ticket and documents', icon: ticket },
  ];

  const secondaryNavItems = [
    { name: 'Calendar', icon: calendar },
    { name: 'Notification', icon: notification },
    { name: 'Settings', icon: settings },
  ];

  const bottomNavItems = [{ name: 'Logout', icon: logout }];

  return (
    <div
      className={`${isExpanded ? 'side-nav' : 'side-nav side-nav-collapse'}`}
    >
      <div className="logo-container">
        <img src={isExpanded ? logo : smallLogo} />
      </div>
      <UserCard isExpanded={isExpanded} />
      <div className="main-navigation">
        {navItems.map((item, index) =>
          isExpanded ? (
            <NavItem key={index} item={item} />
          ) : (
            <NavItemCollapse key={index} item={item} />
          )
        )}
        <div className="bottom-border"></div>
      </div>
      <div className="secondary-navigation">
        {secondaryNavItems.map((item, index) =>
          isExpanded ? (
            <NavItem key={index} item={item} />
          ) : (
            <NavItemCollapse key={index} item={item} />
          )
        )}
        {!isExpanded && (
          <img
            onClick={() => {
              setIsExpanded(true);
            }}
            className="expand-icon"
            src={expandIcon}
          />
        )}
      </div>

      <div className="bottom-navigation">
        {bottomNavItems.map((item, index) =>
          isExpanded ? (
            <NavItem key={index} item={item} />
          ) : (
            <NavItemCollapse key={index} item={item} />
          )
        )}
        {isExpanded && (
          <img
            onClick={() => {
              setIsExpanded(false);
            }}
            className="collapse-icon"
            src={collapseIcon}
          />
        )}
      </div>
    </div>
  );
}

function UserCard({ isExpanded }) {
  const user = {
    image: userImage,
    name: 'Anilla Shah',
    organisation: "Anilla's Org",
  };
  return (
    <div
      className={`${
        isExpanded ? 'user-card' : 'user-card user-card-collapse'
      } `}
    >
      <div className="userimage-wrapper">
        <img src={user.image} />
      </div>
      {isExpanded && (
        <div className="user-details">
          <span className="user-name">{user.name}</span>
          <span className="user-organisation">{user.organisation}</span>
        </div>
      )}
    </div>
  );
}

function NavItem({ item }) {
  const { name, icon } = item;
  return (
    <div className="nav-item">
      <img className="nav-icon" src={icon} />
      <span className="nav-name">{name}</span>
    </div>
  );
}

function NavItemCollapse({ item }) {
  const { name, icon } = item;
  return (
    <div className="nav-item-collapse">
      <img className="nav-icon" src={icon} />
      <span className="nav-name">{name}</span>
    </div>
  );
}
