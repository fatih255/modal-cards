import dynamic from "next/dynamic";
import React, { Suspense } from "react";


type Props = {
    name: string | null
}

function ModalLoader({ name }: Props) {

    const SelectedModal = dynamic(() => import(`components/modals/${name}`), { suspense: false, ssr: true });
    return <Suspense><SelectedModal /></Suspense>
}

export default React.memo(ModalLoader)