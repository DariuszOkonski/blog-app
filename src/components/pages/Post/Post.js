import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getPost, removePost } from '../../../redux/postsRedux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ConfirmModal from '../../common/Modal/Modal';
import NotFound from '../NotFound/NotFound';

function Post() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const navigate = useNavigate();
  const post = useSelector(({ posts }) => getPost({ posts }, id));

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    setShowModal(false);
    dispatch(removePost(id));
    navigate('/');
  };

  if (!post) {
    return <NotFound />;
  }

  return (
    <Container>
      <Row className='px-5'>
        <Col md={6}>
          <h4 className='text-dark text-sm-start mb-3'>{post.title}</h4>
          <div>
            <small className='text-muted'>
              <strong>Author: </strong> {post.author}
            </small>
          </div>
          <div>
            <small className='text-muted'>
              <strong>Published: </strong>
              {post.publishedDate}
            </small>
          </div>
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
            <Button variant='outline-danger' onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Col>
      </Row>

      <ConfirmModal
        show={showModal}
        onHide={handleCancel}
        onConfirm={handleConfirm}
        title='Are you sure?'
        message={`This operation will completely remove this post from the app. Are you sure you want to do that?`}
      />
    </Container>
  );
}

export default Post;
