import React from 'react';
import styled from 'styled-components';
import {menuData} from '../data/MenuData';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  transform:  ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)' )};
  opacity: 1;
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5em;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)``;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size:1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #fed330;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;

  .btn-primary {
  display: inline-block;
  text-decoration: none;
  letter-spacing: 3px;
  color: #ffff;
  background: #121212;
  padding: 20px 50px;
  transition:  all 0.3s linear;
  cursor: pointer;

  &:hover{
    background: #2C3A47;
    color: #fff;
  }
  }
  

`;

const Dropdown = ({open, toggle}) => {
  return (
    <div>
      <DropdownContainer open={open} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <DropdownWrapper>
          <DropdownMenu>
            {menuData.map((item, index) => (
              <DropdownLink to={item.link} key={index} smooth={true} duration={1000}>
                {item.title}
              </DropdownLink>
            ))}
          </DropdownMenu>
          <BtnWrap>
            <Link to='/contact' className="btn-primary">
              Contact Us
            </Link>
          </BtnWrap>
        </DropdownWrapper>
      </DropdownContainer>
    </div>
  );
};

export default Dropdown;