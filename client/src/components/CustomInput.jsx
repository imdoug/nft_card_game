import React from 'react'
import styles from '../styles'

// all character from A-Z a-z or numbers 
const regex = /^[A-Za-z0-9]+$/;

const CustomInput = ({label, placeholder, value, handleValueChange}) => {
  return (
    <>
    <label 
      htmlFor='name' 
      className={styles.label}>
      {label}
    </label>
    <input 
      type={'text'} 
      placeholder={placeholder} 
      value={value} 
      onChange={(e)=>{
      if(e.currentTarget.value === "" || regex.text(e.currentTarget.value)) handleValueChange(e.currentTarget.value)
    }} className={styles.input}/>
    </>
  )
}

export default CustomInput