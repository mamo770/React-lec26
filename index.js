import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App"
import AllFeatures from "./Features/AllFeatures";
import AllDownload from "./Download/AllDownload";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
      
  },
  {
    path: "features",
    element:<AllFeatures/>
  },
  {
    path: "download",
    element:<AllDownload/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
