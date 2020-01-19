import React, { useState, forwardRef } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

import ContactForm from './ContactForm'

const CenteredModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled(Paper)`
  padding: 20px;
`;

const SuccessMessage = forwardRef((props, ref) => (<div ref={ref}>Arigato gozaimasu, oni-chan</div>))

const ContactModalButton = ({}) => {
  const [open, setOpen] = useState(false) 
  const [sent, setSent] = useState(false)

  const onClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Contacto
      </Button>

      <CenteredModal open={open} onClose={onClose}>
        <Body>
          {sent ? <SuccessMessage /> : <ContactForm onSuccess={() => setSent(true)} />}
        </Body>
      </CenteredModal>
    </>
  );
};

export default ContactModalButton;
