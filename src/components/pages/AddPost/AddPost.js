import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getPostsQuantity } from '../../../redux/postsRedux';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

function AddPost() {
  const postsQuantity = useSelector(getPostsQuantity);

  return (
    <Container>
      <SectionHeader text={`Add Post Nr: ${postsQuantity + 1}`} />
      <AddPostForm />
    </Container>
  );
}

export default AddPost;
