import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import auth from "../../../../entities/auth/model/auth";

 const RequireAuth = ({ children }: { children: any }) => {
  const isAuth = auth.isAuth;
  if (!isAuth) {
    return <Navigate to='/auth' />;
  }
  return children;
};
export default observer(RequireAuth)