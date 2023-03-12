import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllPosts, Post, ErrorPage } from "./pages";
import RootLayout from "./pages/RootLayout";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <AllPosts /> },
        { path: '/post/:postId', element: <Post /> },
      ]
    },
    { path: '*', element: <ErrorPage /> }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
