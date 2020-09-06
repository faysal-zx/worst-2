import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment/SingleComment';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.commentId}/comments`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [props.commentId]);

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <SingleComment comment={comment} key={comment.id}></SingleComment>
      ))}

      <Link onClick={'/home'}>
      <Button >
        Go to Homepage
      </Button>
      </Link>




    </div>
    
  );
};

export default Comments;
