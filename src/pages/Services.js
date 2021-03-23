import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';


const Service = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  background: #16384c;
  padding-top: 100px;
`;

const Container = styled.div`
  position: relative;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`;


const Card = styled.div`
  position:relative;
  max-width: 300px;
  height: 215px;
  background: #fff;
  margin: 60px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0,0,0,0.5);
  transition: 0.1s ease-in-out; 

  &:hover {
    height: 420px;
    
  }
`;
const Imagebox = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  top: -100px;
  left: 6px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);

  img {
     max-width: 100%;
     border-radius: 4px;
  }
`;
const Content = styled.div`
  position: relative;
  margin-top: -40px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  /* visibility: hidden; */
  opacity: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    /* visibility: visible; */
    opacity: 1;
    margin-top: -80px;
    transition-delay: 0.3s;
  }
`;


const Services = () => {
  return (
    <>
      <Service>
        <Container>
          <Card>
            <Imagebox>
              <img alt="Image" src={img1} />
            </Imagebox>
            <Content>
              <h2>Billboard</h2>
              <p>Vibrant, eye-catching and surprisingly cost-effective you can really raise your business to the next level</p>
            </Content>
          </Card>

          <Card>
            <Imagebox>
              <img alt="Image" src={img2} />
            </Imagebox>
            <Content>
              <h2>Branding</h2>
              <p>Perfect for promotions, marketing shows conferences, events and office floor display. Easily portable and fast set up</p>
            </Content>
          </Card>

          <Card>
            <Imagebox>
              <img alt="Image" src={img3} />
            </Imagebox>
            <Content>
              <h2>Neon Signs</h2>
              <p>Create your own neon sign designs for business places</p>
            </Content>
          </Card>

          <Card>
            <Imagebox>
              <img alt="Image" src={img4} />
            </Imagebox>
            <Content>
              <h2>Flyers</h2>
              <p>A portable flyer displays your message in an effective and stylish way and increases your exposure.</p>
            </Content>
          </Card>
        </Container>
      </Service>
    </>
  );
};

export default Services;