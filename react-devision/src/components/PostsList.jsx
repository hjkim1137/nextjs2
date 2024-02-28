import Post from './Post';
import styles from './PostsList.module.css';
import NewPost from './NewPost';

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="joy" body="react is awesome!" />
        <Post author="march" body="check out our new website!" />
      </ul>
    </>
  );
}

export default PostsList;
