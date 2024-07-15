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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route element={<RouteLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contacts/>}/>
            <Route path='/reducer' element={<About/>}/>
            <Route path='/user' element={<Journal/>}/>
            <Route path='/admin' element={<Journal/>}/>
        </Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App