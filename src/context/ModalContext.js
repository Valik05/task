import React from 'react'
import Modal from '../Components/Modal/Modal'
import PropTypes from 'prop-types'
import useModal from '../hooks/useModal'


let ModalContext
let { Provider } = (ModalContext = React.createContext())

const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal()
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  )
}
ModalProvider.propTypes = {
  children: PropTypes.func
}

Modal.defaultProps = {
  children: () => {},
}
export { ModalContext, ModalProvider }