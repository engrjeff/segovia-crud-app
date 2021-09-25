import React from "react";

function Toast({ show, message }) {
  if (!show) return null;
  return (
    <div className='app-toast'>
      <p>{message}</p>
    </div>
  );
}

export default Toast;
