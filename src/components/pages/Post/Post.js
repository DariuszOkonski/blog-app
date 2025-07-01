import { useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getPost } from '../../../redux/postsRedux';
import { useParams, NavLink } from 'react-router-dom';
import PostCard from '../../common/PostCard/PostCard';

function Post() {
  const { id } = useParams();
  const post = useSelector(({ posts }) => getPost({ posts }, id));

  console.log(post);

  return (
    <Container>
      <Row className='px-5'>
        <Col md={6}>
          <h4 className='text-dark text-sm-start mb-3'>{post.title}</h4>
          <small className='text-muted'>
            <strong>Author: </strong> {post.author}
          </small>
          <small className='text-muted'>
            <strong>Published: </strong>
            {post.publishedDate}
          </small>
          <p className='text-muted flex-grow-1'>
            <small>{post.shortDescription}</small>
          </p>
        </Col>
        <Col md={6}>
          <div className='d-flex gap-2 justify-content-end'>
            <Button
              as={NavLink}
              to={`/post/edit/${id}`}
              variant='outline-success'
            >
              Edit
            </Button>
            <Button variant='outline-danger'>Delete</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
