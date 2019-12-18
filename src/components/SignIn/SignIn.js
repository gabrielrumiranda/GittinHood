import React, { useState } from 'react';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { SignInStyle } from './styles';

export default function SignIn() {

  const [githubUser, setGithubUSer] = useState('')
  const [errors, setErrors] = useState([])

  const githubUserHandler = e => {
    setGithubUSer(e.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${githubUser}`)
    .then(res => {
      if(res.status !== 200){
        setErrors(res.data.message);
      }
      else {
        console.log('redirect')
      }
    })
  }

  return (
    <SignInStyle>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={'paper'}>
          <Avatar className={'avatar'}>
            <GitHubIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={'form'} onSubmit={submitHandler} noValidate> 
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={githubUser}
              onChange={e => githubUserHandler(e)}
              fullWidth
              id="github"
              label="GitHub User"
              name="github"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={'submit'}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </SignInStyle>
  );
}
