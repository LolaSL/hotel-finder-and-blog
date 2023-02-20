import React from 'react';
import Form from "react-bootstrap/Form";

const NewsLetter = () => {
  return (
    <div>
      <h1>News Letter</h1>
      <h2>Subscribe to my newsletter for the latest blog posts, tips, & travel guides. Let's stay updated!</h2>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => onChange(e)}
            value={values.name}
            id="email"
            name="name"
            placeholder="Name"
            className="form-control"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => onChange(e)}
            type="email"
            required
            id="email"
            name="email"
            className="form-control"
            // value={values.email}
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
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
       </Form>
    </div>
  )
}

export default NewsLetter;