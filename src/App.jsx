import React, { useState } from 'react';
import './App.scss';
import { BsInstagram } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

import PostList from './postList/postList';
import PostForm from './postForm/postForm';

const App = () => {
  const [updatePosts, setUpdatePosts] = useState(false);

  return (
    <>
      <div className="header">
        <FaBars className='react-icons'/>
        <h1 className="title-header">Test Task</h1>
        <BsInstagram className='react-icons'/>
      </div>
      <div className="section">
        <PostList updatePosts={updatePosts} />
        <PostForm setUpdatePosts={setUpdatePosts} /> 
      </div>
    </>
  );
};

export default App;
