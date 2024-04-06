import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Location } from "./pages/index.js";

// const router = createBrowserRouter(
//   createRoutesFromElements([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/:name",
//       element: <Location />,
//     },
//   ])
// );

// export default function App() {
//   return <RouterProvider router={router} />;
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":id",
    element: <Location />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
