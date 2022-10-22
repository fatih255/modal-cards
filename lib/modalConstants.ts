import { ModalAlias } from 'components/modals'
import { ModalType } from 'redux/slices/modal'

/*
text fields extra actions  @Post @Link

*/
export const modalConstants = new Map([
  [
    'SecurityCodeModal',
    {
      contents: {
        texts: [
          'Security Code',
          'This code expires in 24 hours',
          'Code',
          'Cancel',
          'Continue',
        ],
        logo: 'icons/modal/security-code.svg',
      },
      layout: {
        className: 'items-center justify-start',
        size: 'medium',
        position: 'pos-mc',
      },
    },
  ],
  [
    'InstallLocalNowModal',
    {
      contents: {
        texts: [
          'Install local now',
          'We’ve gone native, try it!',
          'Continue',
          'Not now',
        ],
        image: 'images/install-local-now.png',
      },
      layout: {
        className: 'p-none',
        size: 'medium',
        position: 'pos-mc',
      },
    },
  ],
  [
    'ChooseBestForYouModal',
    {
      contents: {
        texts: [
          'PLANS',
          'Choose best for you',
          'Only pay for the capacity that you use.',
          'Cancel',
          'Continue',
        ],
        radios: [
          {
            title: 'Starter',
            description: '1 free (then $15 per meember / month)',
            value: 'starter',
          },
          { title: 'Pro', description: '$19 per member/month', value: 'pro' },
          {
            title: 'Business',
            description: '$29 per member/month',
            value: 'business',
          },
        ],
        logo: '',
      },
      layout: {
        className: 'top-center-modal',
        size: 'medium max-w-[32rem]',
        position: 'pos-mc',
      },
    },
  ],
  [
    'DeleteYourProfileModal',
    {
      contents: {
        texts: [
          'Delete your profile',
          'Your profile will be automatically deleted after 1 month.',
          'You won’t be able to access to your profile after *30.08.2021.*',
          'Delete my profile',
          'Cancel',
        ],
        logo: 'icons/modal/trash.svg',
      },
      layout: {
        className: 'items-center justify-start',
        size: 'medium',
      },
    },
  ],
  [
    'TheFileIsOnItsWayModal',
    {
      contents: {
        texts: [
          `The file is on it's way`,
          'You’ll get an notified when the receiver has opened the email.',
          'Go to dashboard',
        ],
      },
      layout: {
        className: 'items-center justify-start',
        size: 'medium',
      },
    },
  ],
  [
    'JoinOurMailListModal',
    {
      contents: {
        texts: [
          'Join our mail list',
          'Save up to 30% of your next order',
          'Enter your email',
          'Later',
          'Join now',
        ],
        logo: 'icons/modal/discount.svg',
      },
      layout: {
        className: 'items-center justify-start',
        size: 'medium',
        position: 'pos-mc',
      },
    },
  ],
])

export const getModalContants = (modalName: ModalAlias) => {
  return modalConstants.get(modalName) as ModalType
}
