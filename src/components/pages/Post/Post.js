import { useSelector } from 'react-redux';
import { getPost } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const post = useSelector(({ posts }) => getPost({ posts }, id));

  console.log(post);

  return (
    <div>
      <h1>Post111</h1>
    </div>
  );
}

export default Post;
