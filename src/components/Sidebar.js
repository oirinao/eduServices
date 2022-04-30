/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Menu</div>
        <a className="sidebar-close">
          <i className="fa fa-times-circle"></i>
        </a>
      </div>
      <div className="inner">
        <ul className="sidebar-menu">
          <li><span className="nav-section-title"></span></li>
          <li className="have-children"><a href="#">Services</a>
            <ul>
              <li><a href="/services/new">Create Service</a></li>
              <li><a href="/services/me">Your Services</a></li>
            </ul>
          </li>
          <li className="have-children"><a href="#">Offers</a>
            <ul>
              <li><a href="/offers/sent">Sent Offers</a></li>
              <li><a href="/offers/received">Recieved Offers</a></li>
            </ul>
          </li>
          <li className="have-children"><a href="#">Collaborations</a>
            {/* <ul>
              <li><a href="/collaborations/me">Recieved Collaborations</a></li>
            </ul> */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar  