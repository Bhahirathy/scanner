import React from 'react';
import { Col, Container, FormControl, Row, Card, Form } from "react-bootstrap";
import PhonePe from "./assets/PhonePe-Logo.wine.png";
import Gpay from "./assets/pngwing.com.png"
import Paytm from "./assets/paytm.png";
import { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import "./App.css";
function App() {
  const [data, setData] = useState(0);
  const handleInput = (e) => {
    setData(e.target.value)
  }
  return (
    <>
      <Container className='con' style={{ maxWidth: "40%" }}>
        <br />
        <h4 className='all'><b>ALL IN ONE QR</b></h4>
        <h5 className='pay'>Pay using Paytm or any UPI App</h5>
        <br />
        <Card className='image'>
          <Row className='mt-2 ms-3' style={{ marginRight: "3rem" }}>
            <Col sm={3} className='mt-3'><img style={{ height: "80px", width: "100px" }} src={Gpay} alt='gpay'></img></Col>
            <Col className='px-3'><img style={{ height: "100px", width: "150px" }} src={PhonePe} alt='phonepe'></img></Col>
            <br />
            <Col sm={3}><img style={{ height: "75px", width: "100px" }} src={Paytm} alt='paytm'></img></Col>
          </Row>
          <br />
          <h2 className='all'>ALL ACCEPTED HERE</h2>
          <Row class="d-flex" style={{ justifyContent: "center" }}>
            {/* <div > */}
            <QRCode className="qr"
              value={`upi://pay?pa=rathykutty@ybl&pn=Rathy&tn=cftrhwetaw4gta&am=${data}`}
              size="300"
              // logoImage="https://i.postimg.cc/5tdHfkxF/118852864-1241633666213183-4722008391193475906-n.png"
              logoWidth="80"
              logoHeight="100"
              logoOpacity="0.6"
            />
            {/* </div> */}
          </Row>
          <Form>
            <FormControl type='number' max="10000" placeholder='Enter the amount' onChange={handleInput} required></FormControl>
          </Form>
        </Card>
        <br />
      </Container >
    </>
  );
}

export default App;
