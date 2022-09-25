import dynamic from "next/dynamic";
import React, { Suspense } from "react";

type Props = {
    name?: string | null
}

function ModalLoader({ name = null }: Props) {

    let Modal = <></>
    switch (name) {
        case "SecurityCodeModal":
            const Comp = dynamic(() => import(`../components/modals/SecurityCodeModal`), { suspense: true });
            Modal = <Comp />
            break;
        default:
            Modal = <></>
    }
    return (
        <Suspense>
            {Modal}
        </Suspense>
    )


}
export default React.memo(ModalLoader)