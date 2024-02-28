import { useState } from 'react';
import styles from './NewPost.module.css';

function NewPost() {
  const [enteredBody, setEnteredBody] = useState('');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value); // event.target=textarea
  }

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
