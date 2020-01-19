import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import { useTranslations } from '../translations'

const CustomField = styled(TextField)`
  width:400px !important;
`
const CustomButton = styled.div`
  display: flex;
  justify-content center;
  align-items:center;
`

const ContactModal = ({ open, onClose }) => {
  const classes = makeStyles(theme => ({
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center'

    },
    paper: {
      width: 800,
      height: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }))()

  const { translate: t } = useTranslations()

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <div className={classes.paper}>
        <h2>Contactame</h2>
        <form>
          <div>
            <CustomField
              label="Email"
              multiline
              rowsMax="4"
              variant="outlined"
            />
          </div>
          <br />
          <div>
            <CustomField
              label="message"
              multiline
              rows="4"
              defaultValue=""
              variant="outlined"
            />
          </div>
          <br />
          <CustomButton>
            <Button variant="contained" color="secondary" type="submit">
              {t('contact.send')}
            </Button>
          </CustomButton>
        </form>
      </div>
    </Modal>
  )
}

ContactModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default ContactModal
