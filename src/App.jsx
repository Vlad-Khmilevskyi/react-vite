import './App.scss';
import { BsInstagram } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

import PostList from './postList/postList';
import PostForm from './postForm/postForm';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://rest-api-production-fc73.up.railway.app/api/v1/posts';

const App = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  // const fetchPosts = () => {
  //   axios.get(API_URL)
  //     .then((response) => {
  //       setPosts(response.data);
  //       console.log('Updated posts:', response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const updatePosts = () => {
    // fetchPosts();
  };

  return (
    <>
      <div className="header">      
        <FaBars className='react-icons'/>
        <h1 className="title-header">Test Task</h1>
        <BsInstagram className='react-icons'/>
      </div>
      <div className="section">
        <PostList />
        {/* <PostForm /> */}

        {/* <PostList fetchPosts={fetchPosts} /> */}
        <PostForm updatePosts={updatePosts} />
      </div>
    </>
  );
};

export default App; 
