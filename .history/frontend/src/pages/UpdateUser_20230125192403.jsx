
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Loader from "../components/Loader";
import Message from "../components/Message";


const UpdateUser = () => {
  return (
    <Container className="small-container">
 
    <h1>Update User {userId}</h1>

    {loading ? (
      <Loader></Loader>
    ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : (
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Check
          className="mb-3"
          type="checkbox"
          id="isAdmin"
          label="isAdmin"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />

        <div className="mb-3">
          <Button disabled={loadingUpdate} type="submit">
            Update
          </Button>
          {loadingUpdate && <Loader></Loader>}
        </div>
      </Form>
    )}
  </Container>
  )
}

export default UpdateUser;