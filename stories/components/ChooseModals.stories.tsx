import {
  ChooseModalsProps,
  default as Component,
} from 'components/ChooseModals'
import { modals } from 'lib/contants'

export default {
  title: 'Components',
  component: Component,
}

export const ChooseModals = (args: ChooseModalsProps) => <Component {...args} />

ChooseModals.args = {
  modals: modals,
}
