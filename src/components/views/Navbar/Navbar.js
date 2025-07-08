import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Container className='py-2'>
      <Navbar
        bg='primary'
        variant='dark'
        expand='lg'
        sticky='top'
        className='rounded px-1 py-2'
      >
        <Container>
          <Navbar.Brand as={NavLink} to='/'>
            Blog.app
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={NavLink} to='/'>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to='/post/add'>
                Add Post
              </Nav.Link>

              <Nav.Link as={NavLink} to='/categories'>
                Categories
              </Nav.Link>

              <Nav.Link as={NavLink} to='/about'>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarComponent;
