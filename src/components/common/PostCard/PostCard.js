import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <Card className='h-100 shadow-sm'>
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='text-primary'>{post.title}</Card.Title>
        <small className='text-muted'>
          <strong>Author: </strong> {post.author}
        </small>
        <small className='text-muted'>
          <strong>Published: </strong>
          {post.publishedDate}
        </small>
        <small className='text-muted'>
          <strong>Category: </strong>
          {post.category}
        </small>
        <Card.Text className='text-muted flex-grow-1'>
          <small>{post.shortDescription}</small>
        </Card.Text>
        <Button
          as={NavLink}
          to={`/post/${post.id}`}
          variant='primary'
          size='sm'
          className='align-self-start'
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
