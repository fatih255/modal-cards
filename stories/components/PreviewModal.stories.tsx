import {
  PreviewModalProps,
  default as Component,
  defaultPreviewModalValues,
} from 'components/PreviewModal'

export default {
  title: 'Components',
  component: Component,
}

export const PreviewModal = (args: PreviewModalProps) => <Component {...args} />

PreviewModal.args = {
  texts: defaultPreviewModalValues.texts,
}
