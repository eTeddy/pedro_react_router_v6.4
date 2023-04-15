import "./App.css"
import React from "react";
import { 
  createHashRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  NavLink,
} from 'react-router-dom';
import { Home } from "./routes/Home.jsx"
import { Dog, dataLoader } from "./routes/Dog.jsx"
import { Cat } from "./routes/Cat.jsx";
import { Fox } from "./routes/Fox.jsx";

export function App(props) {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/dog" element={<Dog />} loader={dataLoader} />
        <Route path="/fox" element={<Fox />} />
        <Route path="/cat" element={<Cat />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <div id="container">
      <nav id="nav">
        <NavLink className="item" to="/">Home</NavLink>
        <NavLink className="item" to="/dog">Dog</NavLink>
        <NavLink className="item" to="/fox">Fox</NavLink>
        <NavLink className="item" to="/cat" >Cat</NavLink>        
      </nav>

      <div id="outlet">
        <Outlet />
      </div>
      
    </div>
  )
}