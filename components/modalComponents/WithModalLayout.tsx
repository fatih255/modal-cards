import dynamic from 'next/dynamic';
import React from 'react'
import { layoutTypes } from 'types/layout';
import { defaultValues } from 'types/modal';



type Props = {
    layout?: string
}

//detect content have
export default function WithModalLayout({ children, layout = defaultValues.layout, ...props }: Props & layoutTypes) {

    const Layout = dynamic(() => import(`../modals/layouts/${layout}`), {
        suspense: false,
        ssr: true,
    }) as React.FC<layoutTypes>

    return (
        <Layout {...props}>
            {children}
        </Layout>
    )

}


