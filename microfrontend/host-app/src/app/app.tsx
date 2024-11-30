// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import React, { Suspense } from 'react';
const RemoteButton = React.lazy(() => import('remoteApp/Button'));

// const RemoteButton2 = React.lazy(
//   () => import('http://localhost:4202/assets/remoteEntry.js/Button')
// );

export function App() {
  return (
    <div>
      <div>
        <h4>SALERO</h4>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <RemoteButton /> */}
      </Suspense>
      <NxWelcome title="host-app" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
