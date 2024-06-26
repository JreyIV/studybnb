import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Location } from "./pages/index.js";
import Layout from "./components/Layout.jsx";

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
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":id",
        element: <Location />,
      },
      //Add other routes here...
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
