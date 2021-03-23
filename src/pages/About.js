import React from 'react';
import styled from 'styled-components';
import Img from '../images/img4.jpg';
import { Link } from 'react-router-dom';

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
`;

const Aboutheading = styled.div`
  background: url(${Img}) no-repeat left;
  background-size: 55%;
  background-color: #fdfdfd;
  overflow: hidden;
  padding: 100px 0; 

  @media screen and (max-width:1000px){
    background-size: 100%;
    padding: 100px 40px;
  }

  @media screen and (max-width:600px){
    padding: 0;
  }
`;

const Innersection = styled.div`
  width: 55%;
  float: right;
  background-color: #fdfdfd;
  padding: 140px;
  box-shadow: 10px 10px 8px rgba(0,0,0, 0.3);

  h1 {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
  }

  p {
    font-size: 13px;
    color: #545454;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 40px;
  }

  .btn-primary {
    font-size: 22px;
    text-align: center;
    text-decoration: none;
    letter-spacing: 2px;
    border: none;
    padding: 8px;
    width: 200px;
    background-color: #227093;
    color: white;
    cursor: pointer;
    outline:none;

    &:hover {
      transition: 1s;
      background: #ecf5f5;
      color: #227093;
    }
  }

  @media screen and (max-width:1200px){
    padding: 80px
  }
  @media screen and (max-width:1000px){
    width: 100%;
  }
  @media screen and (max-width:600px){
    padding: 60px;

    button {
      font-size: 19px;
      padding: 5px;
      width: 160px;
    }
  }
`;

const About = () => {
  return (
    <Div>
     <Aboutheading>
       <Innersection>
         <h1>About Us</h1>
         <p>Medal Publishing Limited is an online provider of  customised printing. On Demand customisation is very much what drives us here at Ryteprint, we aim to give individuals, small offices home offices Small Medium Enterprises and corporate organisations the power to simplify their print ordering process using our innovative, transparent and technology driven platform. Our experience in the industry is over 6 years working as a print provider, our web to print solution is our way of giving people the power to experience a simple way of ordering print that is both efficient and convenient.

 </p>
         <Link to='/services' className="btn-primary">Services</Link>
       </Innersection>
      </Aboutheading>
    </Div>
  );
};

export default About;