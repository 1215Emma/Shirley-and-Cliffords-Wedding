import React from 'react'
import './SidebarNav.css'
import {HashLink} from 'react-router-hash-link'
const SidebarNav = () => {
  return (
    <div className="sidebar-nav">
                <HashLink
                  smooth to="/#main"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-nav-buttons"
                  // onClick={() => {
                  //   setShowSidebar(!showSidebar);
                  // }}
                >
                  Home
                </HashLink>
                <HashLink
                  smooth
                  to="/#travel"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-nav-buttons"
                  // onClick={() => {
                  //   setShowSidebar(!showSidebar);
                  // }}
                >
                  Travel
                </HashLink>
                <HashLink
                  smooth
                  to="/#rsvp"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-nav-buttons"
                  // onClick={() => {
                  //   setShowSidebar(!showSidebar);
                  // }}
                >
                  RSVP
                </HashLink>
                <HashLink
                  smooth
                  to="/#faq"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-nav-buttons"
                  // onClick={() => {
                  //   setShowSidebar(!showSidebar);
                  // }}
                >
                  Faq
                </HashLink>
                <HashLink
                  smooth
                  to="/#registry"
                  activeStyle={{ fontWeight: "bold" }}
                  className="sidebar-nav-buttons"
                  // onClick={() => {
                  //   setShowSidebar(!showSidebar);
                  // }}
                >
                  Registry
                </HashLink>
      </div>
  )
}

export default SidebarNav

