import Post from './Post';
import styles from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';
import { useEffect, useState } from 'react';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch('http://localhost:9999/posts');
      const resData = await response.json();
      console.log('resData', resData);
      setPosts(resData);
    }
    fetchPost();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:9999/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setPosts((prev) => [postData, ...prev]);
  }

  return (
    <>
      {/* isPosting이 true 이면 */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {/* NewPost에서 입력한 내용이 보여지는 공간 */}
      {/* 순수 자바스크립트 객체 posts를 JSX로 변환 */}
      {posts ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet..</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
