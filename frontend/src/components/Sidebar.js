import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import "../css/Sidebar.css";

const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/admin">
        Admin
      </a>
      <a className="menu-item" href="/appliedjobs">
        Applied Jobs
      </a>
    </Menu>
  );
};

export default Sidebar;