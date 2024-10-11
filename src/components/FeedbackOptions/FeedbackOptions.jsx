import React from 'react'
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   
    return (
        
        <ul>
            {options.map(option => (
                <li key={option}>
                    <button name='{option}' type='button' onClick={onLeaveFeedback}>{ option}</button>
                </li>
            ))}
            
        </ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions