import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import SecurityCodeIcon from 'svgs/modal/security-code.svg'
import { defaultLayoutType } from '../../types/layout'
import { commonType, defaultValues } from '../../types/modal'
import Button from '../Button'
import Input from '../Input'

type Props = {}

export default function SecurityCodeModal({ layout = defaultValues.layout }: commonType) {

    const Layout = dynamic(() => import(`./layouts/${layout}`), {
        suspense: true,
    }) as React.FC<defaultLayoutType>

    return (
        <Suspense>
            <Layout overrideClassName="w-[480px]">
                <div className="no-w-full relative w-[90px] h-[90px] rounded-full flex justify-center items-center ">
                    <SecurityCodeIcon className="relative z-20" />
                    <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-full z-10"></div>
                </div>
                <h1 className="title">Security Code</h1>
                <p className="description">This code expires in 24 hours</p>
                <Input placeholder="Code" />
                <div className="flex gap-3 w-full items-stretch">
                    <Button size="modal-default" text="Cancel" />
                    <Button theme='light-bordered' size="modal-default" text="Continue" />
                </div>
            </Layout>
        </Suspense>
    )
}