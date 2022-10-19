import {
  ModalRadiosProps,
  default as Component,
} from 'components/modalComponents/ModalRadios'
import WithModalLayout from 'components/modalComponents/WithModalLayout'
import { ModalInitialState } from 'redux/slices/modal'

export default {
  title: 'Modal Components',
  component: Component,
  argTypes: {
    colors: {
      type: 'data',
      description: 'Color Palette Size: 5 , modal-bg-color-[1-5]',
    },
    returnedIndex: {
      action: 'clicked',
    },
  },
}

export const ModalRadios = (args: ModalRadiosProps) => (
  <WithModalLayout>
    <Component {...args} />
  </WithModalLayout>
)

ModalRadios.args = {
  colors: ModalInitialState.layout.colors,
  items: [
    {
      title: 'Starter',
      description: '1 free (then $15 per meember / month)',
      value: 'starter',
    },
    { title: 'Pro', description: '$19 per member/month', value: 'pro' },
    {
      title: 'Business',
      description: '$29 per member/month',
      value: 'business',
    },
  ],
}
