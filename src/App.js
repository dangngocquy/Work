import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import { Home, Work } from './components';

import './App.css';

const Assign  = React.lazy(() => import("./components/Assign"));
const AddWork = React.lazy(() => import("./components/AddWork"));
const Draft = React.lazy(() => import("./components/Draft"));
const WorkDone = React.lazy(() => import("./components/WorkDone"));
const AssignedJob = React.lazy(() => import("./components/AssignedJob"));
const Profile =  React.lazy(() => import("./components/Profile"));

function App() {
  return (
    <div className="Background">
      <div className="Background__body">
        <div className="Flex__body">
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Login/>} />
              <Route exact path="Register" element={<Register/>} />
              <Route exact path="Dashboard" element={<Menu />} >
                <Route index element={<Home />} />
                <Route exact path="Assign" element={  <React.Suspense fallback={<div>
                                                                                  Loading...
                                                                                </div>}>
                                                                                <Assign />
                                                          </React.Suspense>}/>
                <Route exact path="Assign/AddWork" element={<React.Suspense fallback={<div>
                                                                                  Loading...
                                                                                </div>}>
                                                                                <AddWork />
                                                          </React.Suspense>} />
                <Route exact path="Draft" element={<React.Suspense fallback={<div>
                                                                                  Loading...
                                                                                </div>}>
                                                                                <Draft />
                                                          </React.Suspense>} />
                <Route exact path="WorkDone" element={<React.Suspense fallback={<div>
                                                                                  Loading...
                                                                                </div>}>
                                                                                <WorkDone />
                                                          </React.Suspense>} />
                <Route exact path="AssignedJob" element={<React.Suspense fallback={<div>
                                                                                  Loading...
                                                                                </div>}>
                                                                                <AssignedJob />
                                                          </React.Suspense>} />
                <Route exact path="Profile" element={<React.Suspense fallback={<div>
                                                                                  Loading...
                                                                                </div>}>
                                                                                <Profile />
                                                          </React.Suspense>} />
                <Route exact path="work" element={<Work/>} />
                <Route exact path="*" element={<h1>Trang không tồn tại</h1>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
