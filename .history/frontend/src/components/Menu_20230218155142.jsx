import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";

const Menu = () => {
    return (
      
        <div
        className={
          sidebarIsOpen
            ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
            : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
        }
      >
        <Nav className="flex-column text-white w-100 pt-4">
          <Nav.Item className="m-3 ">
            <SocialIcon url="https://linkedin.com" className="me-2 social" style={{ height: 25, width: 25 }} />
            Linkedin
          </Nav.Item>
          <Nav.Item className="m-3 ">
            <SocialIcon url="https://github.com/" className="me-2 social" style={{ height: 25, width: 25 }} />
            Github
          </Nav.Item>
          <Link to="/#" className="m-3 text-white a-link">
            {" "}
            New Arrivals
          </Link>
          <Link to="/shop" className="m-3 text-white a-link">
            Arts Shop
          </Link>
          <Link to="/search" className="m-3 text-white a-link">
            Find your Arts
          </Link>
          <Link to="/events" className="m-3 text-white a-link">
            Events
          </Link>
        </Nav>
      </div>
//       <div>
// <SidebarMenu>
//   <SidebarMenu.Header>
//     <SidebarMenu.Brand>
//       {/* Your brand icon */}
//     </SidebarMenu.Brand>
//     <SidebarMenu.Toggle />
//   </SidebarMenu.Header>
//   <SidebarMenu.Body>
//     <SidebarMenu.Nav>
//       <SidebarMenu.Nav.Link>
//         <SidebarMenu.Nav.Icon>
//           {/* Menu item icon */}
//         </SidebarMenu.Nav.Icon>
//         <SidebarMenu.Nav.Title>
//           {/* Menu item title */}
//         </SidebarMenu.Nav.Title>
//       </SidebarMenu.Nav.Link>
//     <SidebarMenu.Nav/>
//     <SidebarMenu.Sub>
//       <SidebarMenu.Sub.Toggle>
//         <SidebarMenu.Nav.Icon />
//         <SidebarMenu.Nav.Title>
//           {/* Submenu title */}
//         </SidebarMenu.Nav.Title>
//       </SidebarMenu.Sub.Toggle>
//       <SidebarMenu.Sub.Collapse>
//         <SidebarMenu.Nav>
//           <SidebarMenu.Nav.Link>
//             <SidebarMenu.Nav.Icon>
//               {/* Submenu item icon */}
//             </SidebarMenu.Nav.Icon>
//             <SidebarMenu.Nav.Title>
//               {/* Submenu item title */}
//             </SidebarMenu.Nav.Title>
//           </SidebarMenu.Nav.Link>
//         </SidebarMenu.Nav>
//       </SidebarMenu.Sub.Collapse>
//     </SidebarMenu.Sub>
//   <SidebarMenu.Body/>
// </SidebarMenu>
//     </div>
  )
}

export default Menu