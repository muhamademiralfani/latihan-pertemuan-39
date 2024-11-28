/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const prefetchPage = () => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/blog/1';
    document.head.appendChild(link);
    console.log('prefetching');
  };
  return (
    <>
      <div>Home</div>
      <Link to={'/blog/1'} onMouseOver={prefetchPage}>
        Blog
      </Link>
    </>
  );
};

export default Home;
