import { FooterProps, default as Component } from 'components/Footer'

export default {
  title: 'Components',
  component: Component,
}

export const Footer = (args: FooterProps) => <Component {...args} />

Footer.args = {
  text: 'Powered by Popupsmart',
}
