import React from 'react'
import ModalCard from './ModalCard'
import PaginationContent from './PaginationContent'


export type ChooseModalsProps = {
  modals: {
    name: string
    thumbnail: string
  }[]
}

export default function ChooseModals({ modals }: ChooseModalsProps) {


  return (
    <div className="flex flex-col items-start">
      <PaginationContent
        jsx={({ data }) => <ModalCard {...data} />}
        data={modals}
        name="modals"
        per={12} />
    </div>
  )
}