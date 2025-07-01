import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function EmptyPost() {
  return (
    <Card className='text-center shadow-sm'>
      <Card.Body className='py-5'>
        <div className='mb-4'>
          <i
            className='bi bi-file-text text-muted'
            style={{ fontSize: '4rem' }}
          ></i>
        </div>
        <Card.Title className='h3 mb-3'>No Posts Found</Card.Title>
        <Card.Text className='text-muted mb-4'>
          There are currently no posts in the blog. Be the first to share your
          thoughts!
        </Card.Text>
        <Button as={NavLink} to='/post/add' variant='primary' size='lg'>
          Create First Post
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EmptyPost;
