import {
  CheckBoxListProps,
  default as Component,
} from 'components/panelComponents/CheckBoxList'

export default {
  title: 'Panel Components',
  component: Component,
}

export const CheckBoxList = (args: CheckBoxListProps) => <Component {...args} />

CheckBoxList.args = {
  items: [
    {
      checked: false,
      text: 'Send form submissions',
      value: 'sendFormSubmission',
    },
    { checked: false, text: 'Send click data', value: 'sendClickData' },
  ],
  returnedValue: (data: any) => {
    console.log(data)
  },
}
