import React from 'react'
// import { IndexLink, Link } from 'react-router'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <Navbar color="dark" dark expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/counter">Counter</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/movies">Movies</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
