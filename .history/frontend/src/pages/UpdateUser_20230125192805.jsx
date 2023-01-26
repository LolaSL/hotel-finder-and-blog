
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";



const UpdateUser = () => {
  return (
    <Container className="container">
 
    <h1 className="font-weight-light display-1 text-center">Update User</h1>

      <Form >
        <Form.Group className="mb-3 fw-bold" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            // value={email}
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        {/* <Form.Check
          className="mb-3"
          type="checkbox"
          id="isAdmin"
          label="isAdmin"
        //   checked={isAdmin}
        //   onChange={(e) => setIsAdmin(e.target.checked)}
        /> */}

        <div className="mb-3">
          <Button disabled="" type="submit">
            Update
          </Button>
        
        </div>
      </Form>

  </Container>
  )
}

export default UpdateUser;