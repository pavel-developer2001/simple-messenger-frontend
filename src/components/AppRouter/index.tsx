import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Auth from "../../pages/Auth";
import { RequireAuth } from "../../hoc/RequireAuth";
import Chat from "../../pages/Chat";
import Channel from "../../pages/Channel";
import CreateChat from "../../pages/CreateChat";
import CommentsPage from "../../pages/CommentsPage";
import CreateChannel from "../../pages/CreateChannel";

const AppRouter = () => {
  const privateRoutes = [
    { path: "/", component: <Home /> },
    { path: "/chat/:id", component: <Chat /> },
    { path: "/channel/:id", component: <Channel /> },
    { path: "/channel/:id/comments", component: <CommentsPage /> },
    { path: "/create-chat", component: <CreateChat /> },
    { path: "/create-channel", component: <CreateChannel /> },
  ];
  return (
    <div>
      <Routes>
        {privateRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<RequireAuth>{route.component}</RequireAuth>}
          />
        ))}
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
