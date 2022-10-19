import {
  SwitchProps,
  default as Component,
} from 'components/panelComponents/Switch'

export default {
  title: 'Panel Components',
  component: Component,
}

export const Switch = (args: SwitchProps) => <Component {...args} />

Switch.args = {
  text: 'Exit Intent Targetting',
  fieldName: 'exitIntentTargetting',
  activeDefault: false,
  children: <div>This is a childen component</div>,
}
