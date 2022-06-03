import React from 'react';
import Modal from 'react-modal/lib/components/Modal';

const customStyles = {
    content: {
        width: '350px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');
const ErrorModal = ({ modalIsOpen, setIsOpen, errorMessage }) => {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div>
                    <p className='text-xl font-semibold text-warning mb-3'>Failed to Login!</p>
                    <span className='text-red-500'>{errorMessage}</span>
                </div>
                <div className='flex justify-end mt-5'>
                    <button className='btn btn-error px-8 py-0' onClick={closeModal}>close</button>
                </div>
            </Modal>
        </div>
    );
};

export default ErrorModal;