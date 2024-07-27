import React from "react";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import InstallPromptHandler from "./component/InstallPromptHandler";

function App() {
  return (
    <>
      <InstallPromptHandler  />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
