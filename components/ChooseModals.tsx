import React from 'react'
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
      <PaginationContent
        jsx={({ data }) => <ModalCard {...data} />}
        data={modals}
        name="modals"
        per={12} />
    </div>
  )
}