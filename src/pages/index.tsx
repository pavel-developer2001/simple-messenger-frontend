import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import RequireAuth from "../shared/lib/hoc/RequireAuth"

const Chat = lazy(() => import(/* webpackChunkName: "Chat" */ "./Chat"))
const Auth = lazy(() => import(/* webpackChunkName: "Auth" */ "./Auth"))
const Channel = lazy(
  () => import(/* webpackChunkName: "Channel" */ "./Channel")
)
const CreateChat = lazy(
  () => import(/* webpackChunkName: "CreateChat" */ "./CreateChat")
)
const CommentsPage = lazy(
  () => import(/* webpackChunkName: "CommentsPage" */ "./CommentsPage")
)
const CreateChannel = lazy(
  () => import(/* webpackChunkName: "CreateChannel" */ "./CreateChannel")
)

const AppRouter = () => {
  const privateRoutes = [
    { path: "/", component: <Home /> },
    { path: "/chat/:id", component: <Chat /> },
    { path: "/channel/:id", component: <Channel /> },
    { path: "/channel/:id/comments", component: <CommentsPage /> },
    { path: "/create-chat", component: <CreateChat /> },
    { path: "/create-channel", component: <CreateChannel /> },
  ]
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

        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  )
}

export default AppRouter
