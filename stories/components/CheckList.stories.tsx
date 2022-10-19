import { CheckListProps, default as Component } from 'components/CheckList'

export default {
  title: 'Components',
  component: Component,
}

export const CheckList = (args: CheckListProps) => <Component {...args} />

CheckList.args = {
  texts: [
    'Free and paid plans',
    'Setup in minutes',
    'No credit card required*',
  ],
}
