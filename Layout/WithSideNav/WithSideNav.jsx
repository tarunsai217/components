import * as React from 'react';
import './WithSideNav.scss';
import SideNavbar from '../../Components/SideNavigation/SideNavigation';

export default function WithSideNav(WrappedComponent, className) {
  console.log('component...', WrappedComponent);
  return () => {
    return (
      <div className={`${className} page`}>
        <div className="side-nav-wrapper">
          <SideNavbar />
        </div>

        <WrappedComponent />
      </div>
    );
  };
}
