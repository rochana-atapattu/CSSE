import React from "react";
import {Modal} from 'react-bootstrap';

const CustomModal = (props) => {
    const { handleClose, show,children,Title } = props
    return (
        <div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {children}
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
export default CustomModal