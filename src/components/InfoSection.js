import React from 'react';
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';


const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 800px; 

  @media screen and (max-width:768px) {
    grid-template-columns: 1fr;
  } 
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }

  .btn-primary {
    display: inline-block;
    text-decoration: none;
    letter-spacing: 3px;
    color: #fff;
    background: #fed330;
    padding: 10px 20px;
    transition:  all 0.3s linear;
    cursor: pointer;

    &:hover{
    background: #f7b731;
    color: #fff;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:768px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};
    width: 90%;
      height: 90%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

   
  }
`;

const InfoSection = ({heading, pOne, reverse, image }) => {
  return (
    <Section id="section" css={`background: #121212`}>
      <Container >
        <ColumnLeft css={`color: #fff`}>
          <h1>{heading}</h1>
          <p>{pOne}</p>
          <Link to="/services" className="btn-primary">Services</Link>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;