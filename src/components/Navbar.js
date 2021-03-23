import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link, NavLink} from 'react-router-dom';
import {menuData} from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';



const Nav = styled.nav`
  height: 60px;
  display: flex;
  background: #fff;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  /* background: red; */
`;

const NavLinks = css`
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLinks}
  display: block;

  h2 {
    font-size: 40px;
    font-style: italic;
    font-weight: 600;
  }
  

  p {
    font-size: 12px;
    font-weight: 200;
    display: block;
    padding-bottom: 2px;
  }
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 25px;
    width: 25px;
    cursor: pointer;
    color: #000;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-80%, 65%);
    
  }
`;

const NavMenu = styled.div` 
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;



// const NavMenuLinks = styled(Link)`
//   ${NavLink}

//   &:hover {
//     background: #fed330;
//     color: white;
//     transition: 0.3s ease-in-out;
//   }

//   &:active{
//     background: #fed330;
//   }
// `;

// export const NavMenuLinks = styled(NavLink).attrs ({
//   activeClassName,
// })`
//   &.${activeClassName} {
//     background: #fed330;
//     color: white;
//     transition: 0.3s ease-in-out;
//   }
// `

const NavMenuLinks = styled(NavLink)`
  padding: 0.5rem 1rem;
  color: #000;
  text-decoration: none;

  &:hover {
    background: #fed330;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  .btn-primary {
    display: inline-block;
    text-decoration: none;
    letter-spacing: 3px;
    color: #ffff;
    background: #121212;
    padding: 15px 20px;
    transition:  all 0.3s linear;
    cursor: pointer;

    &:hover{
    background: #3d3d3d;
    color: #fff;
  }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo to="/" smooth={true} duration={1000}>
        <h1>MPL</h1>
        <p>RC 1231613</p>
      </Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks exact
          activeStyle={{
            background: '#fed330',
            color: 'white'
          }}
         to={item.link} key={index} smooth={true} duration={1000}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Link to="/contact" className="btn-primary">Contact Us</Link>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;