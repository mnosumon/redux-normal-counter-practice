import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RouteLayout from "./routeLayout/RouteLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import User from "./pages/user/User";
import Admin from "./pages/admin/Admin";
import AddNote from "./pages/addNote/AddNote";
import Note from "./pages/note/Note";
import Ragistration from "./pages/ragistration/Ragistration";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RouteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ragistration" element={<Ragistration />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addNote" element={<AddNote />} />
          <Route path="/note" element={<Note />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
