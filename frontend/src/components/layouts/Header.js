
//   import React from 'react';
//   import Container from 'react-bootstrap/Container';
//   import Nav from 'react-bootstrap/Nav';
//   import Navbar from 'react-bootstrap/Navbar';
//   import { Link, useNavigate } from 'react-router-dom';
//   // import Search from './Search';
//   import { useDispatch, useSelector } from 'react-redux';
//   import { DropdownButton, Dropdown, Image } from 'react-bootstrap';
//   import { logout } from '../../actions/userActions';
//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//   import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
  
//   function Header() {
//     const { isAuthenticated, user } = useSelector(state => state.authState);
//     const { items: cartItems } = useSelector(state => state.cartState)
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const logoutHandler = () => {
//       dispatch(logout);
//     }
  
//     return (
//       <>
//         <Navbar  variant="dark">
//           <Container>
          
          
//             <div className="navbar navbar-brand">
//               <Link to="/">
//                 <img width="100px" alt='Auwshi Logo' src="/images/logo.png" />
//               </Link>
              
//             </div>
//             <Nav className="me-auto">
//               {/* <Nav.Link href="/">Home</Nav.Link> */}
//               <Nav.Link className="navbox" href="/aboutus">About Us</Nav.Link>
//               <Nav.Link href="/product">Products</Nav.Link>
//               <Nav.Link href="#blogs">Blog</Nav.Link>
              
//             </Nav>
            
          
//             <div>
//               {isAuthenticated ?
//                 (
//                   <Dropdown className='d-inline'>
//                     <Dropdown.Toggle variant='default  pr-5' id='dropdown-basic' cl>
//                       <figure className='avatar avatar-nav'>
//                         <Image width="50px" src={user.avatar ?? './images/default_avatar.png'} />
//                       </figure>
//                       <span>{user.name}</span>
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       {user.role === 'admin' && <Dropdown.Item onClick={() => { navigate('admin/dashboard') }} className='text-dark'>Dashboard</Dropdown.Item>}
//                       <Dropdown.Item onClick={() => { navigate('/myprofile') }} className='text-dark'>Profile</Dropdown.Item>
//                       <Dropdown.Item onClick={() => { navigate('/orders') }} className='text-dark'>Orders</Dropdown.Item>
//                       <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 ) :
//                 <Link to="/login" className="btn" id="login_btn">Login</Link>
//               }
//               <Link to="/cart">
//   <span id="cart" className="ml-3">
//     <FontAwesomeIcon icon={faShoppingCart} />
//   </span>
// </Link>
// <span className="ml-1" id="cart_count">
//   {cartItems.length}
// </span>
//             </div>
          
//           </Container>
//         </Navbar>
//       </>
//     );
//   }
  
//   export default Header;
  


import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownButton, Dropdown, Image } from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { isAuthenticated, user } = useSelector(state => state.authState);
  const { items: cartItems } = useSelector(state => state.cartState)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout);
  }

  return (
    <div>
      <Navbar variant="dark" className="fixed-top">
        <Container>
          <div className="navbar navbar-brand">
            <Link to="/">
              <img id='logo' width="100px" alt='Auwshi Logo' src="/images/logo.png" />
            </Link>
          </div>
          <Nav className="me-auto">
            <Nav.Link className="navbox" href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/product">Products</Nav.Link>
            <Nav.Link href="#blogs">Blog</Nav.Link>
          </Nav>
          <div>
            {isAuthenticated ?
              (
                <Dropdown className='d-inline'>
                  <Dropdown.Toggle variant='default  pr-5' id='dropdown-basic' cl>
                    <figure className='avatar avatar-nav'>
                      <Image width="50px" src={user.avatar ?? './images/default_avatar.png'} />
                    </figure>
                    <span>{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {user.role === 'admin' && <Dropdown.Item onClick={() => { navigate('admin/dashboard') }} className='text-dark'>Dashboard</Dropdown.Item>}
                    <Dropdown.Item onClick={() => { navigate('/myprofile') }} className='text-dark'>Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => { navigate('/orders') }} className='text-dark'>Orders</Dropdown.Item>
                    <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) :
              <Link to="/login" className="btn" id="login_btn">Login</Link>
            }
            <Link to="/cart">
              <span id="cart" className="ml-3">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
            </Link>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </div>
        </Container>
      </Navbar>
      <div id="content">
        {/* Rest of the page content here */}
      </div>
    </div>
  );
}

export default Header;


