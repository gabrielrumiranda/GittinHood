import React, { useEffect, useState } from 'react';
import {Drawer} from './components/Drawer';
import {Dashboard} from './components/Dashboard';
import {useStyles} from './styles/index'
import axios from 'axios'

function App() {
  const classes = useStyles();
  const githubUser = 'gabrielrumiranda';
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios.get(`https://api.github.com/users/${githubUser}`)
    .then(res => {
      if(res.status === 200){
        setUserData(res.data);
      }
    })
  },[])
  return (
    <>
      <Drawer userData={userData}/>
      <div className={classes.main}>
        <Dashboard userData={userData} />
      </div>
    </>
  );
}

export default App;
