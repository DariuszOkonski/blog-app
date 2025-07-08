import { useNavigate, useParams } from 'react-router-dom';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import PostForm from '../../features/PostForm/PostForm';
import { editPost, getPost } from '../../../redux/postsRedux';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from '../NotFound/NotFound';

function EditPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const post = useSelector(({ posts }) => getPost({ posts }, id));

  const handleSubmit = (data) => {
    dispatch(editPost({ ...data, id }));

    navigate(`/post/${id}`);
  };

  if (!post) {
    return <NotFound />;
  }

  return (
    <div>
      <SectionHeader text='Edit Post' />
      <PostForm
        action={handleSubmit}
        actionText='Edit Submit'
        title={post.title}
        author={post.author}
        category={post.category}
        publishedDate={post.publishedDate}
        shortDescription={post.shortDescription}
        content={post.content}
      />
    </div>
  );
}

export default EditPost;
