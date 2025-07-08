import { Col, Container, Row } from 'react-bootstrap';
import PostCard from '../../common/PostCard/PostCard';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../../redux/postsRedux';

function SelectedCategories() {
  const { type } = useParams();
  const posts = useSelector(({ posts }) => getPostsByCategory({ posts }, type));

  return (
    <Container className='my-5'>
      <SectionHeader
        text={`Category: ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      />
      {!posts.length ? (
        <p>No posts in this category...</p>
      ) : (
        <Row>
          {posts.map((post) => (
            <Col key={post.id} lg={4} md={6} sm={12} className='mb-4'>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default SelectedCategories;
