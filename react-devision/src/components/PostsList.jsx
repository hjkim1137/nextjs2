import Post from './Post';
import styles from './PostsList.module.css';
import NewPost from './NewPost';
import { useState } from 'react';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  // 상태를 변화시키는 함수
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        // 함수를 실행시키는게 아니라 속성의 "값으로" 함수를 넘긴다
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostsList;
