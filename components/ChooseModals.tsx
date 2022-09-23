import React, { useState } from 'react'
import ModalCard from './ModalCard'
import PaginationContent from './PaginationContent'

type Props = {
  modals: {
    name: string
    thumbnail: string
  }[]
}

export default function ChooseModals({ modals }: Props) {

  return (
    <div className="flex flex-col items-start">
      <PaginationContent name="modals" per={12}>
        {
          modals.map((values, index) => <ModalCard key={index + values.name} {...values} />)
        }
      </PaginationContent>
    </div>
  )
}