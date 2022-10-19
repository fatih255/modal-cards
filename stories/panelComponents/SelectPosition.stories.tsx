import {
  SelectPositionProps,
  default as Component,
} from 'components/panelComponents/SelectPosition'

export default {
  title: 'Panel Components',
  component: Component,
}

export const SelectPosition = (args: SelectPositionProps) => (
  <Component {...args} />
)

SelectPosition.args = {}
