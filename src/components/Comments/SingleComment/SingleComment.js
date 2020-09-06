import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: 20,
    padding: 10,
  },
  avatar: {
    backgroundColor: red[50],
  },
}));

const SingleComment = (props) => {
  const classes = useStyles();

  const { name, email, body, id } = props.comment;

  //   generate profile image from 50 image of randomuser.me api

  let imgId = id;
  if (imgId > 50) {
    imgId = Math.floor(Math.random() * 50) + 1;
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            <img
              src={`https://randomuser.me/api/portraits/med/women/${imgId}.jpg`}
              alt=''
            />
          </Avatar>
        }
        title={name.toUpperCase()}
        subheader={email}
      />

      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleComment;
