import * as React from 'react';
import AssetExplorer from './Components/AssetExplorer/AssetExplorer';
import Transport from './Components/Transport/Transport';
import ActivityRow from './Components/ActivityRow/ActivityRow';
import SideNav from './Components/SideNavbar/SideNav';
import './style.css';
import Nav from './Components/Nav/Nav';
import Dropdown from './FormComponents/Dropdown/Dropdown';
import Rating from './FormComponents/Rating/Rating';
import PhoneNumber from './FormComponents/PhoneNumber/PhoneNumber';
import Switch from './FormComponents/Switch/Switch';

import AssetManager from './Pages/AssetManager/AssetManager';
import './style.css';

export default function App() {
  return (
    <div className="app">
      {/* <AssetExplorer /> */}
      {/* <SideNav /> */}
      {/* <Nav /> */}
      {/* <Transport /> */}
      {/* <ActivityRow /> */}
      {/* <Dropdown /> */}
      <Rating />
      {/* <PhoneNumber /> */}
      {/* <Switch /> */}
      <AssetManager />
    </div>
  );
}
