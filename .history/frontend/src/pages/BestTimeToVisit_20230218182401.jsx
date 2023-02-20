import React from 'react'
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";


const BestTimeToVisit = () => {
  return (
    <div className="d-flex slide">
    <Helmet>
      <title>Complete guide for visiting Israel</title>
    </Helmet> 
        <Container className="container">
        <h1 className="font-weight-light display-1 text-center mt-4 mb-4">
          Complete guide for visiting Israel
        </h1>
        <section className="d-block juctify-content-center">
          <h2 className="mt-2 mb-2 display-4 text-center mt-4 mb-4">
            1. Tel Aviv and Jaffa Port
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/20.jpg"
              alt="Yaffa"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Dining, shopping, and nightlife opportunities abound in the
            coastal beach city of Tel Aviv, which in many ways can feel like
            the American city of Miami. You will see vibrant graffiti art,
            modern architecture as well as the largest collection of Bauhaus
            buildings in the world, and plenty of boutiques selling everything
            from textiles to home goods to clothing to furniture. Walk along
            the beach promenade or take a tour of the area via bicycle or
            Segway. Be sure to visit Carmel Market to sample different types
            of Israeli foods and drinks, influenced by a multitude of
            cultures. Explore the winding and narrow streets of Jaffa Old
            City, also known as Yafo, and its port. The contrast of the oldest
            port in the world, home to multiethnic communities, next to the
            modern city of Tel Aviv is stark. See the Jaffa Clock Tower, Saint
            Nicholas Monastery, the Great Mahmoudiya Mosque, the Old Jaffa
            Museum of Antiquities, and several gardens, squares, and
            courtyards.
                      </article>
                  </section>
                  </Container>
                  </div>
  )
}

export default BestTimeToVisit;



