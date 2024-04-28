import React, {ReactNode, useContext }  from "react";
import ReactDOM from "react-dom"
import styles from './Modal.module.css';
import { ModalContext } from "../../context/ModalProvider";

export type modalType = {
    children: ReactNode;
}

const Modal:React.FC<modalType> = ({children}) =>{
    const {showModal} = useContext(ModalContext)
    return ReactDOM.createPortal(<dialog className={styles.modal} open={showModal}>
        {children}
    </dialog>, document.querySelector("#modal")!)
}

export default Modal;