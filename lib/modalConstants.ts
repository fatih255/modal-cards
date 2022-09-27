
export const modalContentConstants = new Map([
    [
        'SecurityCodeModal',
        [
            'Security Code',
            'This code expires in 24 hours',
            'Code',
            'Cancel',
            'Continue'
        ],
    ],
    [
        'InstallLocalNowModal',
        [
            'Install local now',
            'We’ve gone native, try it!',
            'Continue',
            'Not now',
        ]
    ]
]);

export const getmodalConstants = (modalName: string) => {
    return modalContentConstants.get(modalName) as string[]
}