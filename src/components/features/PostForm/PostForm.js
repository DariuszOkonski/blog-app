import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import styles from './PostForm.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function PostForm({
  action,
  actionText,
  title,
  author,
  publishedDate,
  shortDescription,
  content,
}) {
  const [formData, setFormData] = useState({
    title: title ?? '',
    author: author ?? '',
    publishedDate: new Date(),
    shortDescription: shortDescription ?? '',
    content: content ?? '',
  });

  useEffect(() => {
    if (publishedDate) {
      setFormData((prev) => ({
        ...prev,
        publishedDate: new Date(publishedDate),
      }));
    }
  }, [publishedDate]);

  const handleQuillInputChange = (inputData) => {
    setFormData((prev) => ({
      ...prev,
      content: inputData,
    }));
  };

  const handleDatePickerInputChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      publishedDate: date,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDate = {
      ...formData,
      publishedDate: formData.publishedDate.toLocaleDateString(),
    };

    action(newDate);
  };

  return (
    <Row className='justify-content-center'>
      <Col lg={8} md={10}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              placeholder='Enter post title'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type='text'
              name='author'
              value={formData.author}
              onChange={handleInputChange}
              placeholder='Enter author name'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Published Date</Form.Label>
            {/* <Form.Control
              type='text'
              name='publishedDate'
              value={formData.publishedDate}
              onChange={handleInputChange}
              placeholder='Enter published date (e.g., 01-07-2025)'
              required
            /> */}
            <div>
              <DatePicker
                selected={formData.publishedDate}
                // selected={formData.publishedDate}
                onChange={(date) => handleDatePickerInputChange(date)}
              />
            </div>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              name='shortDescription'
              value={formData.shortDescription}
              onChange={handleInputChange}
              placeholder='Enter a brief description of your post'
              required
            />
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Label>Main Content</Form.Label>
            <ReactQuill
              className={styles.contentForm}
              theme='snow'
              value={formData.content}
              onChange={handleQuillInputChange}
            />
          </Form.Group>

          <div className='d-flex justify-content-start mt-5'>
            <Button variant='primary' type='submit' size='lg'>
              {actionText}
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;
