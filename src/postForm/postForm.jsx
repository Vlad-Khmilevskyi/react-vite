import React, { useState} from 'react';
import axios from 'axios';
import './postForm.scss';
const API_URL = 'https://rest-api-production-fc73.up.railway.app/api/v1/posts';

const PostForm = ({updatePosts}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      description: description,
      text: text,
    };

    axios.post(API_URL, newPost)
      .then(() => {
        // Clear form fields
        setTitle('');
        setDescription('');
        setText('');
        // Update the list of posts by calling the function from PostList
        updatePosts(console.log('qwe'));
      })
    .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="title-post">Create Post</h2>
      <form id="createPostForm" className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="title"
          className="form__title"
          placeholder="Enter Your Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          id="description"
          className="form__description"
          placeholder="Enter Your Subtitle"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          id="text"
          className="form__text"
          placeholder="Enter Your Description"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit" className="btn">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
