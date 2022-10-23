import { PARAM_REDUX_MERGE_STATE } from 'addon-redux'
import { ModalInitialState, selectModal } from 'redux/slices/modal'
import { getModalContants } from 'lib/modalConstants'
import { ModalAlias } from 'components/modals'
import ModalLoader, {
  ModalLoaderProps,
} from 'components/modalComponents/ModalLoader'
import { useAppDispatch } from 'redux/hooks'

const selectedModalConstants = getModalContants(ModalAlias.SecurityCodeModal)
const initialState = {
  modal: {
    ...ModalInitialState,
    contents: selectedModalConstants.contents,
    layout: { ...ModalInitialState.layout, ...selectedModalConstants.layout },
    selectedModalName: 'SecurityCodeModal',
  },
}

export default {
  title: 'Modals',
  component: ModalLoader,
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: JSON.stringify(initialState),
  },
  argTypes: {
    selectedModalName: {
      options: [...Object.values(ModalAlias)],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
}

export const Modals = (args: ModalLoaderProps) => {
  const dispatch = useAppDispatch()
  args.selectedModalName && dispatch(selectModal(args.selectedModalName))
  return <ModalLoader {...args} />
}

Modals.args = {
  selectedModalName: 'SecurityCodeModal',
}
