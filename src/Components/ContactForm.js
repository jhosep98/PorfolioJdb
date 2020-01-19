import React from "react";
import PropTypes from 'prop-types'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useForm, useField } from 'react-final-form-hooks'
import styled from 'styled-components'

import { useTranslations } from "../translations";

const Root = styled.div`
  position: relative;  
`

const CustomField = styled(TextField)`
  width: 400px !important;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 16px !important;
  }
`

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(256, 256, 256, 0.95);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactForm = ({ onSuccess }) => {
  const { translate: t } = useTranslations();

  const { form, handleSubmit, submitting } = useForm({
    async onSubmit(values) {
      await emailjs.send("gmail", "portfolio_contact", values);
      onSuccess();
    }
  });

  const name = useField("name", form);
  const email = useField("email", form);
  const comment = useField("comment", form);

  return (
    <Root>
      <h2>Contactame</h2>

      {submitting && (
        <LoadingOverlay>
          <CircularProgress />
        </LoadingOverlay>
      )}

      <Form onSubmit={handleSubmit}>
        <CustomField
          label="Nombre"
          name="name"
          rowsMax="4"
          variant="outlined"
          required
          {...name.input}
        />

        <CustomField
          label="Email"
          name="email"
          rowsMax="4"
          variant="outlined"
          required
          {...email.input}
        />

        <CustomField
          label="Message"
          name="comment"
          multiline
          rows="4"
          defaultValue=""
          variant="outlined"
          required
          {...comment.input}
        />

        <Button
          disabled={submitting}
          variant="contained"
          color="secondary"
          type="submit"
        >
          {t("contact.send")}
        </Button>
      </Form>
    </Root>
  );
};

ContactForm.propTypes = {
  onSuccess: PropTypes.func.isRequired
}

export default ContactForm;
