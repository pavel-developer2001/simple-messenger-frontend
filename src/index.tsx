import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import "./app/index.css";

ReactDOM.render(
  <Router>
    <Suspense fallback={<CircularProgress />}>
      <App />
    </Suspense>
  </Router>,
  document.getElementById("root")
);
