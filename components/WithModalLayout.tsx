import dynamic from 'next/dynamic'
import React from 'react'
import { useEffectOneTime } from '../lib/hooks'
import { useAppDispatch } from '../redux/hooks'
import { updateModalProps } from '../redux/slices/modal'
import { defaultLayoutType } from '../types/layout'
import { defaultValues } from '../types/modal'


type Props = {
    children: JSX.Element | JSX.Element[]
    layout?: string
}

export default function WithModalLayout({ children, layout = defaultValues.layout }: Props) {

    const dispatch = useAppDispatch()

    const Layout = dynamic(() => import(`./modals/layouts/${layout}`), {
        suspense: false
    }) as React.FC<defaultLayoutType>

    //get contents from reactNode
    useEffectOneTime(() => {
        const allProps: string[] = []
        React.Children.map(children, (child => {
            if (typeof child.props.children === "object") {
                React.Children.map(child.props.children, (child => {
                    child.props.className.includes('content') && allProps.push(child.props.text)
                }))
            } else {
                allProps.push(child.props.children ?? child.props.placeholder)
            }
        }))
        dispatch(updateModalProps({ name: 'content', value: allProps }))

    })

    return (
        <Layout>
            {children}
        </Layout>
    )
}


