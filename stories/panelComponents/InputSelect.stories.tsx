import {
  InputSelectProps,
  default as Component,
} from 'components/panelComponents/InputSelect'

export default {
  title: 'Panel Components',
  component: Component,
}

export const InputSelect = (args: InputSelectProps) => <Component {...args} />

InputSelect.args = {
  selectAllText: 'All Languages',
  items: [
    { checked: true, text: 'Turkish', value: 'tr' },
    { checked: true, text: 'English', value: 'en' },
    { checked: true, text: 'French', value: 'fr' },
    { text: 'German', value: 'de' },
    { text: 'Polish', value: 'pl' },
    { text: 'Dutch', value: 'nl' },
    { text: 'Finnish', value: 'fi' },
  ],
}
