import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container>
      <footer className='bg-white text-dark py-4 mt-5 rounded border'>
        <div className='text-center'>
          <p className='mb-0 text-muted'>Copyright &copy; BlogApp 2025</p>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
