import React from "react";

function Modal({
  show = false,
  title,
  onCancel,
  onClose,
  onOk,
  okText = "Save",
  children,
  okBtnColor = "primary",
}) {
  if (!show) return null;

  return (
    <div className='app-modal modal'>
      <div className='modal-dialog modal-fade-in'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button className='btn-close' onClick={onClose}></button>
          </div>
          <div className='modal-body'>{children}</div>
          <div className='modal-footer'>
            <button className={`btn btn-${okBtnColor} btn-sm`} onClick={onOk}>
              {okText}
            </button>
            <button className='btn btn-secondary btn-sm' onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
