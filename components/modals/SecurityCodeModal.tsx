import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import SecurityCodeIcon from 'svgs/modal/security-code.svg'
import { childrenComponentType } from '../../types'
import { commonType, defaultValues } from '../../types/modal'

type Props = {}

export default function SecurityCodeModal({ layout = defaultValues.layout }: commonType) {

    const Layout = dynamic(() => import(`./layouts/${layout}`), {
        suspense: true,
    }) as childrenComponentType

    return (
        <Suspense>
            <Layout>
                <div className="modal">
                    <SecurityCodeIcon />
                    security modal
                </div>
            </Layout>
        </Suspense>
    )
}