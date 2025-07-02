import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost, getPostsQuantity } from '../../../redux/postsRedux';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import PostForm from '../../features/PostForm/PostForm';

function AddPost() {
  const postsQuantity = useSelector(getPostsQuantity);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(addPost(data));
    navigate('/');
  };

  return (
    <Container>
      <SectionHeader text={`Add Post Nr: ${postsQuantity + 1}`} />
      <PostForm action={handleSubmit} actionText='Add Post' />
    </Container>
  );
}

export default AddPost;
