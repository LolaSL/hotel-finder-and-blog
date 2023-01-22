import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const tabs = [
    {
        route: '/',
        textKey: 'home'
    },
    {
        route: '/tourist_tips',
        textKey: 'tips'
    },
    {
        route: '/signIn',
        textKey: 'signin'
    }


];

const Navbar = () => {
   
    return (

        <Navbar className="navbar nav" bg="black" variant="dark" expand="lg">
        <Container className="container">
          <Button className="me-4"
            variant="dark"
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          >
            <i className="fas fa-bars"></i>
          </Button>
          <Link className="a-link me-2" to="/" rel="noopener noreferrer">
            <Navbar.Brand>New Arrivals</Navbar.Brand>
          </Link>
          <Link className="a-link text-white" to="/shop" rel="noopener noreferrer">
            Arts Shop
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar />
            <Nav className="me-auto w-100 justify-content-end">
              <Link to='/cart' className="nav-link">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</Badge>
                )}
              </Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orders">
                    <NavDropdown.Item>Order History</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <Link className="nav-link" to="/signin">
                  Sign In</Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <LinkContainer to="/admin/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/products">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orders">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/users">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
}

export default Navbar;