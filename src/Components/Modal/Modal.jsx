import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from '../../context/ModalContext'
import './Modal.css'
const Modal = () => {
  let { modalContent, handleModal, modal } = useContext(ModalContext)

  if (modal) {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => handleModal()}>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <p>{modalContent}</p>
            </div>
          </div>
        </div>
      </div>,
      document.querySelector('#modal-root')
    )
  } else return null
}

export default Modal