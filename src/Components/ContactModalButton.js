import React, { useState, forwardRef } from "react";
import styled from "styled-components";

import { useTranslations } from '../translations'
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

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
  const { translate: t } = useTranslations()
  return (
    <>
      <Button variant="outlined" color="secondary" onClick={() => setOpen(true)}>
        {t('aboutMe.contact')}
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
