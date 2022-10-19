import { AccordionProps, default as Component } from 'components/Accordion'
import { FrequentlyAskedQuestions } from 'lib/contants'

export default {
  title: 'Components',
  component: Component,
}

export const Accordion = (args: AccordionProps) => <Component {...args} />

Accordion.args = {
  items: FrequentlyAskedQuestions,
}
