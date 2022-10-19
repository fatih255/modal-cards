import React from 'react'

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
      data-text
      className={`input ${className}`}
      placeholder={placeholder}
      type='text'
    />
  )
}
