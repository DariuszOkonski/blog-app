import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col lg={8} md={10}>
          <Card className='shadow-sm'>
            <Card.Body className='p-4'>
              <Card.Title className='h2 text-primary mb-4'>
                Welcome to Blog.app
              </Card.Title>
              <Card.Text className='mb-4'>
                Blog.app is a modern, intuitive blogging platform built with
                React and Bootstrap. Our mission is to provide writers and
                content creators with a simple yet powerful tool to share their
                thoughts, ideas, and stories with the world.
              </Card.Text>
              <Card.Text className='mb-4'>
                Whether you're a seasoned blogger or just starting your writing
                journey, Blog.app offers all the essential features you need:
                create engaging posts, manage your content, and connect with
                your audience through a clean and responsive interface.
              </Card.Text>
              <Card.Text className='mb-4'>Key features include:</Card.Text>
              <ul className='mb-4'>
                <li>Easy-to-use post creation and editing</li>
                <li>Responsive design that works on all devices</li>
                <li>Clean, modern interface</li>
                <li>Fast and reliable performance</li>
              </ul>
              <Card.Text className='text-muted mb-4'>
                Start exploring our blog posts and discover amazing content from
                various authors, or create your own posts to share your unique
                perspective with our community.
              </Card.Text>

              <hr className='my-4' />

              <div className='mb-4'>
                <h5 className='text-primary mb-2'>About the Author</h5>
                <Card.Text className='mb-1'>
                  <strong>Created by:</strong> Dariusz Okonski
                </Card.Text>
                <Card.Text className='text-muted'>
                  Built with ❤️ using React, Bootstrap, and Redux
                </Card.Text>
              </div>

              <div className='text-center'>
                <Button as={NavLink} to='/' variant='primary' size='lg'>
                  Explore Blog Posts
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
