import React from 'react';
import {Drawer} from './components/Drawer';
import {Dashboard} from './components/Dashboard';
import {useStyles} from './styles/index'

function App() {
  const classes = useStyles();

  return (
    <>
      <Drawer />
      <div className={classes.main}>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
