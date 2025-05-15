import React from "react";
import {
  FaUsers,
  FaAddressBook,
  FaClipboardList,
  FaHome,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUsers /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <FaAddressBook />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/services">
                  <FaClipboardList /> Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
