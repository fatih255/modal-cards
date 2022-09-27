import dynamic from 'next/dynamic'
import React from 'react'
import { defaultLayoutType } from '../types/layout'
import { defaultValues } from '../types/modal'


type Props = {
    children: JSX.Element | JSX.Element[]
    layout?: string
}

export default function WithModalLayout({ children, layout = defaultValues.layout }: Props) {

    const Layout = dynamic(() => import(`./modals/layouts/${layout}`), {
        suspense: false
    }) as React.FC<defaultLayoutType>

   

    return (
        <Layout>
            {children}
        </Layout>
    )
}

