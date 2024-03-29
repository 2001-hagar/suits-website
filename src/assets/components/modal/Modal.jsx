import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";


function Modal({ children, showModal, setShowModal }) {
    const dialog = useRef();
    const showModalHandler = () => {
        dialog.current.showModal();
    };
    const hideModalHandler = () => {
        dialog.current.close();
    };
    useEffect(() => {
        if (showModal) {
            showModalHandler();
        } else if (!showModal && dialog) {
            hideModalHandler();
        }
    }, [showModal]);

    return createPortal(
        <dialog
            ref={dialog}
            onClick={(e) => {
                if (e.target.className === "modal") {
                    setShowModal(false);
                }
            }}
            onClose={() => {
                setShowModal(false);
            }}
            className="modal"
        >
            <div className="modal-content">
                {children}
            </div>
        </dialog>,

        document.getElementById("modal"),
    );
}

export default Modal;