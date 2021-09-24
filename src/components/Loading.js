import React from "react";

function Loading({ show }) {
  if (!show) return null;
  return <div className='app-loading-spinner'></div>;
}

export default Loading;
