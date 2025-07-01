import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';

const Home = () => {
  const posts = useSelector(getAllPosts);

  console.log(posts);

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li>{post.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
