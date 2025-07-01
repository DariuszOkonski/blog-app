import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '50vh' }}
    >
      <Card className='text-center shadow-lg' style={{ maxWidth: '500px' }}>
        <Card.Body className='py-5'>
          <div className='mb-4'>
            <h1 className='display-1 text-primary'>404</h1>
          </div>
          <Card.Title className='h2 mb-3'>Page Not Found</Card.Title>
          <Card.Text className='text-muted mb-4'>
            Sorry, the page you are looking for doesn't exist or has been moved.
          </Card.Text>
          <Button as={NavLink} to='/' variant='primary' size='lg'>
            Go Back Home
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NotFound;
