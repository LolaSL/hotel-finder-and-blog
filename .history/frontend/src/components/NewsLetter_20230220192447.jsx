import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NewsLetter = () => {
  return (
    <div>
      <h1 className="font-weight-light display-4 text-center">News Letter</h1>
      <h2 className="font-weight-light display-6 text-center">
        Subscribe to my newsletter for the latest blog posts, tips, & travel
        guides. Let's stay updated!
      </h2>
      <Container className="small-container mt-4 mb-4">
        <Form
        // onSubmit={(e) => onSubmit(e)}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              // onChange={(e) => onChange(e)}
              // value={values.name}
              id="email"
              name="name"
              placeholder="Name*"
              className="form-control"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              // onChange={(e) => onChange(e)}
              type="email"
              required
              id="email"
              name="email"
              className="form-control"
              // value={values.email}
              placeholder="Email*"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              // onChange={(e) => onChange(e)}
              type="password"
              // value={values.password}
              placeholder="Password"
              className="form-control"
              id="password"
              name="password"
              required
              autoComplete="new-password"
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
          <Button type submit className="btn mt-2">Send Message</Button>
        </Form>
      </Container>
    </div>
  );
};

export default NewsLetter;
