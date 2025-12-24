import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Abouts from './pages/Abouts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Navbar from './components/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>
  },
  {
    path: "/blogs",
    element: <><Navbar /><Blogs /></>
  },
  {
    path: "/abouts",
    element: <><Navbar /><Abouts /></>
  },
  {
    path: "/login",
    element: <><Navbar /><Login /></>
  },
  {
    path: "/signup",
    element: <><Navbar /><Signup /></>
  }

])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App