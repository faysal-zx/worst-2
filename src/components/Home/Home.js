import React, { useEffect, useState } from 'react';

import Post from '../Post/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);

  // load posts from post api
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {/* Show each post using post component */}
      {posts.map((post) => (
        <Post key={post.id} post={post} homePage={true}></Post>
      ))}
    </div>
  );
};

export default Home;
