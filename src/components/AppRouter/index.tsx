import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Auth from "../../pages/Auth";
import { RequireAuth } from "../../hoc/RequireAuth";
import Channel from "../../pages/Channel";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path='/auth' element={<Auth />} />
        <Route
          path='/:id'
          element={
            <RequireAuth>
              <Channel />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
