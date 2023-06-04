import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import auth from "../entities/auth/model/auth"
import AppRouter from "../pages"
import { token } from "../shared/api/messenger/base"

function App() {
  const isAuth = auth.isAuth

  useEffect(() => {
    if (token) {
      auth.checkAuth(!isAuth)
      auth.userCheckout()
    }
  }, [])
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default observer(App)
