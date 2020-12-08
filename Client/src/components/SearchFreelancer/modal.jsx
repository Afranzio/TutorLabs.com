import React from 'react';
import SFreelancer from './SFreelancer';

import {Modal, Button} from 'react-bootstrap';
  
export default function Modalpop(profile) {
const [modalShow, setModalShow] = React.useState(false);

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {profile.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{profile.position}</h4>
          <p>{profile.bio}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function change(){
    setModalShow(!modalShow)
}

return (
    <>
    <SFreelancer changer={change} />
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
    />
    </>
);
}
  