import React from 'react'
import { Router, Redirect } from "@reach/router"
import Login from './Pages/login'
import Products from './Pages/products'
import Single from './Pages/single'
import Newproduct from './Pages/newproduct'


const PrivateRoute = (props) => {
  const authenticated = true
  const { Component } = props;
  return (
    <>
      {authenticated ? (
        <Component Prop={{ ...props }} />
      ) : (
        <Redirect to="/login" noThrow={true} />
      )}
    </>
  );
};

export default function App() {

  return (
    <Router>
      {/* <Home path="/" /> */}
      < Login path="login" />
      <PrivateRoute Component={Newproduct} path="/create" />
      <PrivateRoute Component={Single} path="/:id" />
      <PrivateRoute Component={Products} path="/" />
    </Router>
  )
}
