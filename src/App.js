import React from 'react'
import { Router } from "@reach/router"
import Login from './Pages/login'
import Products from './Pages/products'
import Single from './Pages/single'


export default function App() {
  return (
    <Router>
      {/* <Home path="/" /> */}
      <Login path="login" />
      <Products path="/" />
      <Single path="/:id" />
    </Router>
  )
}
