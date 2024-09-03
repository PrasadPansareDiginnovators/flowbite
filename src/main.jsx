import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Flowbite from './componants/flowbite.jsx';
import ToDo from './componants/ToDo.jsx';
import Done from './componants/Done.jsx';
import InProgress from './componants/InProgress.jsx';
import AddAnotherGroup from './componants/AddAnotherGroup.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
      <Route path='/' element={<Flowbite />}>
        <Route path='/' element={
          <>
            <ToDo />
            <InProgress />
            <Done />
            <AddAnotherGroup />
          </>
        } />
      </Route>
    </Route>

  )
);

// Get the root element and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// Measure performance (optional)
