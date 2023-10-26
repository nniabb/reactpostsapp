import React, { useState } from 'react';
import './App.css';
import { memo } from 'react';


function Form({ addPost }) {
  const [newPosts, setNewPosts] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (newPosts === '') return;
    addPost(newPosts);
    setNewPosts('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="inpt"
        type="text"
        placeholder="New Post"
        value={newPosts}
        onChange={(e) => setNewPosts(e.target.value)}
      ></input>
    </form>
  );
}

export default memo(Form)

