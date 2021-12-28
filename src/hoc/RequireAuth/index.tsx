import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: any }) => {
  const auth = true;
  if (!auth) {
    return <Navigate to='/auth' />;
  }
  return children;
};
