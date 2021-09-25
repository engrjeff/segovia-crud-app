import React from "react";
import { useUsers } from "../../context/UserContext";

import Loading from "../Loading";
import Toast from "../Toast";

function PageContent({ children }) {
  const { isLoading, toast } = useUsers();

  return (
    <div className='container my-3 position-relative'>
      <Loading show={isLoading} />
      <Toast show={toast.shown && !isLoading} message={toast.message} />
      {children}
    </div>
  );
}

export default PageContent;
