import React from 'react'
import css from './Notification.module.css'
import PropTypes from "prop-types";

export const Notification = ({message}) => {
  return (
      <p>{ message}</p>
  )
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Notification