import React from 'react'
import './style.module.scss'

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
      className={`input ${className}`}
      placeholder={placeholder}
      type='text'
    />
  )
}
