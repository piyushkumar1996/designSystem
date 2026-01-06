import React, { useState } from 'react';

export const modalContext = React.createContext({
    modals: [],
})

const ModalProvider = ({children}) => {
    const [modals, setModals] = useState([]);

    const openModal = ({Component, props}) => {
        setModals(prev => [...prev, {id: Date.now(), Component, props}])
    }

    const closeModal = () => {
        setModals(modals.slice(0, -1))
    }

    return (
        <modalContext.Provider value={{modals, openModal, closeModal}}>
            {children}
        </modalContext.Provider>
    )
}

export default ModalProvider;