import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import {Container, Row, Col} from 'react-bootstrap';
import '../../components/Acceuil/Home.css'
import Apropos from '../Acceuil/Apropos'



import img3 from '../../assets/b3.jpg'
import img1 from "../../assets/bb1.jpg"
import img9 from '../../assets/b9.jpg'
import img12 from '../../assets/histoire1.jpg'
import V from '../../assets/vay1.jpg'
import M from '../../assets/Man.jpg'
import kair from '../../assets/kairouan2.jpg'

export default function Home() {
  return (
    <div>
      <br />
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      style= {{
        height:'400px'
      }}
    />
    <Carousel.Caption>
      <h3>Sidi Bou Said</h3>
      <h3>Café des délices</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img12}
      alt="First slide"
      style= {{
        height:'400px'
      }}
    />
    <Carousel.Caption>
      <h3>Carthage</h3>
      <h3>théâtre Aljam</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={kair}
      alt="Third slide"
      style= {{
        height:'400px'
      }}
    />

    <Carousel.Caption>
      <h3>Kairouan</h3>
      <h3>Mosquée Okba Ebn Nafaa</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      style= {{
        height:'400px'
      }}
    />

    <Carousel.Caption>
      <h3>Sidi bou said</h3>
      <h3>Ville</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br />
<br />
<div>
  <h1>La Tunisie : Histoire , Culture et Beauté</h1>
  <br />
  <p>En Tunisie, on lâche prise et on profite de la mer, du soleil et d’une cuisine parfumée pour un voyage ensoleillé.</p>
  <p>Avec un climat méditerranéen et une température moyenne de 30°c en été, la Tunisie vous charmera grâce à ses eaux limpides.</p>
</div>


<br />
<br />
<div>
<Container>
  <Row>
  <Col xs={6} md={4}>
      <Image src={V} thumbnail />
      <button className="button-box"><h4 className="green"><a href="voyager.js">Voyager</a></h4></button>
    </Col>
    <Col xs={6} md={4}>
      <Image src={M} thumbnail />
      <button className="button-box"><h4 className="green"><a href="manger.js">Manger</a></h4></button>
    </Col>
    <Col xs={6} md={4}>
      <Image src={img9} thumbnail />
      <button className="button-box"><h4 className="green"><a href="relaxer.js">Se relaxer</a></h4></button>
    </Col>
  </Row>
</Container>
<br />
<Apropos />
</div>
<br />
<br />
  
    </div>
  );
}
