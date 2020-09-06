import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
    padding:10,
  },
  postTitle: {
    fontSize: 24,
    color: 'red',
  },
});

const Post = (props) => {
  const { id, title, body } = props.post;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.postTitle} gutterBottom>
          {title}
        </Typography>

        <Typography variant='body2' component='p' color='green'>
          {body}
        </Typography>
      </CardContent>

      <CardActions>
        {props.homePage && (
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to={`/postDetail/${id}`}
          >
            <Button variant='contained' color='orange'>
              See More
            </Button>
          </Link>
        )}
        {!props.homePage && <Comments commentId={id}></Comments>}
      </CardActions>
    </Card>
  );
};

export default Post;
