import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import useStyles from './styles';

import { Coaches, CoachInformation, NavBar, Profile } from './index.js'

const App = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar/>
      <main className={classes.content}>
      <div className={classes.toolbar}/>
        <Switch>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
            <Route exact path="/coaches">
                <Coaches/>
            </Route>
            <Route exact path="/coach/:username">
                <CoachInformation/>
            </Route>
            <Route exact path="/profile/:username">
                <Profile/>
            </Route>
        </Switch>
        </main>
    </div>
  );
}

export default App;
