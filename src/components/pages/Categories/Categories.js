import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesRedux';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

function Categories() {
  const categories = useSelector(getAllCategories);

  return (
    <Container className='my-5'>
      <SectionHeader text='Categories' />
      <Row>
        {categories.map((category) => (
          <Col key={category} xs={12} className='mb-1'>
            <div className='border p-3 rounded'>
              <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categories;
