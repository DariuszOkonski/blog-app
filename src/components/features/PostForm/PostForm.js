import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import styles from './PostForm.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

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
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const categories = useSelector(getAllCategories);
  console.log(categories);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

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

  const handleSubmit = () => {
    setDateError(false);
    setContentError(false);

    if (!formData.content || !formData.publishedDate) {
      setDateError(true);
      setContentError(true);
      return;
    }

    const postData = {
      ...formData,
      publishedDate: formData.publishedDate.toLocaleDateString(),
    };

    if (formData.content && formData.publishedDate) {
      action(postData);
    }
  };

  return (
    <Row className='justify-content-center'>
      <Col lg={8} md={10}>
        <Form onSubmit={validate(handleSubmit)}>
          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              {...register('title', {
                required: 'This field is required',
                minLength: {
                  value: 4,
                  message: 'Title must be longer than 3 letters',
                },
              })}
              type='text'
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              placeholder='Enter post title'
            />
            {errors.title && (
              <span className='d-block form-text text-danger mt-2'>
                {errors.title.message}
              </span>
            )}
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Author</Form.Label>
            <Form.Control
              {...register('author', {
                required: 'This field is required',
                minLength: {
                  value: 4,
                  message: 'Author name must be longer than 3 letters',
                },
              })}
              type='text'
              name='author'
              value={formData.author}
              onChange={handleInputChange}
              placeholder='Enter author name'
            />
            {errors.author && (
              <span className='d-block form-text text-danger mt-2'>
                {errors.author.message}
              </span>
            )}
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Published Date</Form.Label>
            <div className='position-relative'>
              <DatePicker
                selected={formData.publishedDate}
                onChange={(date) => handleDatePickerInputChange(date)}
                className='form-control'
                placeholderText='Select published date'
                dateFormat='dd/MM/yyyy'
                showPopperArrow={false}
                autoComplete='off'
                wrapperClassName='w-100'
                calendarClassName='shadow'
              />
              <i
                className='bi bi-calendar3 position-absolute top-50 end-0 translate-middle-y me-3 text-muted'
                style={{ pointerEvents: 'none' }}
              ></i>
              {dateError && (
                <span className='d-block form-text text-danger mt-2'>
                  Select date
                </span>
              )}
            </div>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              {...register('shortDescription', {
                required: 'This field is required',
                minLength: {
                  value: 20,
                  message: 'Short description must have at least 20 characters',
                },
              })}
              as='textarea'
              rows={3}
              name='shortDescription'
              value={formData.shortDescription}
              onChange={handleInputChange}
              placeholder='Enter a brief description of your post'
            />
            {errors.shortDescription && (
              <span className='d-block form-text text-danger mt-2'>
                {errors.shortDescription.message}
              </span>
            )}
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Label>Main Content</Form.Label>
            <ReactQuill
              className={styles.contentForm}
              theme='snow'
              value={formData.content}
              onChange={handleQuillInputChange}
            />
            {contentError && (
              <span className='d-block form-text text-danger mt-2'>
                Fill in content field
              </span>
            )}
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
