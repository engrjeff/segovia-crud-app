import React from "react";
import { useUsers } from "../../context/UserContext";

import Loading from "../Loading";

function PageContent({ children }) {
  const { isLoading } = useUsers();

  return (
    <div className='container my-3 position-relative'>
      <Loading show={isLoading} />
      {children}
    </div>
  );
}

export default PageContent;
