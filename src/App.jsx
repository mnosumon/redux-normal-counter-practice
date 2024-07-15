import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RouteLayout from './routeLayout/RouteLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Reducer from './pages/reducer/Reducer';
import User from './pages/user/User';
import Admin from './pages/admin/Admin';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route element={<RouteLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/reducer' element={<Reducer/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/admin' element={<Admin/>}/>
        </Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App