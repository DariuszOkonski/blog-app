import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getAllPosts } from '../../../redux/postsRedux';
import PostCard from '../../common/PostCard/PostCard';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import EmptyPost from '../../common/EmptyPost/EmptyPost';

const Home = () => {
  const posts = useSelector(getAllPosts);

  if (!posts?.length) {
    return <EmptyPost />;
  }

  return (
    <Container className='my-5'>
      <SectionHeader text='All Posts' />
      <Row>
        {posts.map((post) => (
          <Col key={post.id} lg={4} md={6} sm={12} className='mb-4'>
            <PostCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
