import React, { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext<{
    showModal:boolean,
    handelModal: () => void,
}>({
    showModal: true,
    handelModal: () => {},
});

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [showModal,setShowModal] = useState<boolean>(false);

    const handelModal = ()=>{
        setShowModal(currentModalStatus => !currentModalStatus)
    }

    const modalCtx = {
        showModal,
        handelModal
    }
    return <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
