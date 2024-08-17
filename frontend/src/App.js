import React from "react";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import InstallPromptHandler from "./component/InstallPromptHandler";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <InstallPromptHandler />
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
