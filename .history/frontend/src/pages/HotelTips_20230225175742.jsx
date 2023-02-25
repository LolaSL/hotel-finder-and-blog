import React from 'react';
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";



const HotelTips = () => {
  return (
    <Container className="container">
      <Helmet>
        <title>Tips to find hotel</title>
          </Helmet>
         
          <h1 className="font-weight-light display-1 text-center mt-4 mb-4 p-2">The tips to find hotel</h1>
          <section>
              <article>
                  
              </article>
          </section>
          <section>
              
              <h2>Tip to find hotel</h2>
              <div className="mb-4 mt-4">
              <img
                src="./images/2.jpg"
                alt="Winter"
                className="img-thumbnail image rounded mx-auto d-block"
              />
            </div>
              <article>
                
              </article>
          </section>
          </Container>
  )
}

export default HotelTips