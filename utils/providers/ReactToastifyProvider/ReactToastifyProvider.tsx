import React, { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReactToastifyProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}

      <ToastContainer
        pauseOnHover={false}
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeButton={false}
        limit={3}
        position="bottom-center"
      />
    </>
  );
}

export default ReactToastifyProvider;
