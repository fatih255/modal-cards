import { ModalCardProps, default as Component } from 'components/ModalCard'
import { FrequentlyAskedQuestions } from 'lib/contants'

export default {
  title: 'Components',
  component: Component,
}

export const ModalCard = (args: ModalCardProps) => (
  <div className='flex'>
    <Component {...args} />
  </div>
)

ModalCard.args = {
  name: 'SecurityCodeModal',
  thumbnail: 'images/modals/01.png',
}
