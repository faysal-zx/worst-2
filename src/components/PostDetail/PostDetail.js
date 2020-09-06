import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <Post key={post.id} post={post} homePage={false}></Post>
    </div>
  );
};

export default PostDetail;
