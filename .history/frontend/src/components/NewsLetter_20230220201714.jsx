import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";

const NewsLetter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ekfabhz",
        "template_52k2hts",
        form.current,
        "a1-h3jZLHbSfCbuK1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <h1 className="font-weight-light display-4 text-center">News Letter</h1>
      <h2 className="font-weight-light display-6 text-center">
        Subscribe to my newsletter for the latest blog posts, tips, & travel
        guides. Let's stay updated!
      </h2>
      <Container className="small-container mt-4 mb-4">
        <Form ref={form} onSubmit={(e) => sendEmail(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              id="email"
              name="user_name"
              placeholder="Name*"
              className="form-control"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              id="email"
              name="user_email"
              className="form-control"
              placeholder="Email*"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              className="form-control"
              id="text"
              name="text"
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="address"
              placeholder="Your message"
              // onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button type="submit" className="btn mt-2">
            Send Message
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default NewsLetter;
