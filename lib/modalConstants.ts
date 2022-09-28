import { ModalType } from "redux/slices/modal";



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
                    'Continue'
                ]
            },
            layout: {
                className: "items-center justify-start",
                size: "medium",
                position: "pos-mc",
                colors: 'color-primary',
            }
        }
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
                image: 'images/install-local-now.png'
            },
            layout: {
                className: "p-none",
                size: "medium",
                position: "pos-mc",
                colors: 'color-primary',
            }
        }
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
                    { title: 'Starter', description: '1 free (then $15 per meember / month)', value: 'starter' },
                    { title: 'Pro', description: '$19 per member/month', value: 'pro' },
                    { title: 'Business', description: '$29 per member/month', value: 'business' }
                ]
            },
            layout: {
                className: "top-center-modal",
                size: "medium max-w-[32rem]",
                position: "pos-mc",
                colors: 'color-primary',
            }
        }
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
                    'Cancel'
                ]
            },
            layout: {
                className: "items-center justify-start",
                size: "medium",
                position: "pos-mc",
                colors: 'color-primary',
            }
        }
    ]
]);



export const getModalContants = (modalName: string) => {

    return modalConstants.get(modalName) as ModalType
}
