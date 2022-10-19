import React from 'react'
import variables from './style.module.scss'

export type InputTextModalProps = {
  placeholder?: string
  className?: string
}

export default function InputTextModal({
  placeholder = '',
  className = '',
}: InputTextModalProps) {
  return (
    <input
      className={`${variables.input} ${className}`}
      placeholder={placeholder}
      type='text'
    />
  )
}
