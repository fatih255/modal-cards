import {
  RadioButtonProps,
  default as Component,
} from 'components/panelComponents/RadioButton'

const defaultOptions = [
  { text: 'Small', value: 'small' },
  { text: 'Medium', value: 'medium' },
  { text: 'Large', value: 'large' },
]

export default {
  title: 'Panel Components',
  component: Component,
  argTypes: {
    defaultValue: {
      control: {
        options: [
          ...defaultOptions.reduce(
            (acc: any, data: any) => [...acc, data.value],
            [],
          ),
        ],
        type: 'radio',
      },
    },
  },
}

export const RadioButton = (args: RadioButtonProps) => (
  <div className='flex w-min'>
    <Component {...args} />
  </div>
)

RadioButton.args = {
  defaultValue: 'medium',
  options: [
    { text: 'Small', value: 'small' },
    { text: 'Medium', value: 'medium' },
    { text: 'Large', value: 'large' },
  ],
}
