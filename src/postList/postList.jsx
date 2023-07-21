import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './postList.scss';

const API_URL = 'https://rest-api-production-fc73.up.railway.app/api/v1/posts';

const PostList = ({ updatePosts }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [updatePosts]);

  const fetchPosts = () => {
    axios.get(API_URL)
      .then((response) => {
        setPosts(response.data);
        // console.log('Updated posts:', response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleRemoveClick = (postId) => {
    removePost(postId);
  };

  const removePost = (postId) => {
    axios.delete(`${API_URL}/${postId}`)
      .then(() => {
        removePostFromList(postId);
      })
      .catch((error) => console.log(error));
  };

  const removePostFromList = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <>
      <h2 className="title-post">Posts</h2>
      <ul className="user-list">
        {posts.map((post) => (
          <li key={post.id} data-post-id={post.id}>
            <p className="post-title">{post.title}</p>
            <p className="post-description">{post.description}</p>
            <p className="post-text">{post.text}</p>
            <button
              type="button"
              className="btn remove-btn"
              onClick={() => handleRemoveClick(post.id)}
            >
              <span className="btn_text">Remove</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;

