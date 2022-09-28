import { ModalInitialState, ModalType } from "redux/slices/modal";



export const modalConstants = new Map([
    [
        'SecurityCodeModal',
        {
            contents: [
                'Security Code',
                'This code expires in 24 hours',
                'Code',
                'Cancel',
                'Continue'
            ],
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
            contents: [
                'Install local now',
                'We’ve gone native, try it!',
                'Continue',
                'Not now',
            ],
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
            contents: [
                'PLANS',
                'Choose best for you',
                'Only pay for the capacity that you use.',
                'Cancel',
                'Continue',
                'radios',
                [
                    { title: 'Starter', description: '1 free (then $15 per meember / month)' },
                    { title: 'Pro', description: '$19 per member/month' },
                    { title: 'Business', description: '$29 per member/month' }
                ]
            ],
            layout: {
                className: "top-center-modal",
                size: "medium",
                position: "pos-mc",
                colors: 'color-primary',
            }
        }
    ],
    [
        'DeleteYourProfileModal',
        {
            contents: [
                'Delete your profile',
                'Your profile will be automatically deleted after 1 month.',
                'You won’t be able to access to your profile after *30.08.2021.*',
                'Delete my profile',
                'Cancel'
            ],
            layout: {
                className: "items-center justify-start",
                size: "medium",
                position: "pos-mc",
                colors: 'color-primary',
            }
        }
    ]
]);



function getValues(modalName: string, value: string) {
    const arr = modalConstants.get(modalName)
    if (!arr) return {}
    const propertyIndex = arr.contents.findIndex((x) => x === value) + 1
    const filteredArray = arr.contents.filter((x) => typeof x === "string" && x !== value);

    //if not have radio 
    if (propertyIndex === 0) {
        return {
            texts: [...filteredArray, arr.contents[propertyIndex]]
        }
    }
    return {
        texts: filteredArray,
        [value]: arr.contents[propertyIndex]
    }

}
export const getModalLayoutConstants = (modalName: string) => {

    return modalConstants.get(modalName)?.layout as ModalType['LayoutProps']
}

export const getModalContentConstants = (modalName: string) => {
    return getValues(modalName, 'radios') as ModalType['ModalProps']['content']
}

