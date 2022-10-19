import {
  InputTextModalProps,
  default as Component,
} from 'components/modalComponents/InputTextModal'
import { WithModalLayout } from 'components/modalComponents'

export default {
  title: 'Modal Components',
  component: Component,
}

export const InputTextModal = (args: InputTextModalProps) => (
  <WithModalLayout>
    <Component {...args} />
  </WithModalLayout>
)

InputTextModal.args = {
  placeholder: 'Placeholder...',
}
