import Flexing from "components/Flexing";
import ModalCard from "components/ModalCard";
import { PaginationContentProps, default as Component } from "components/PaginationContent";
import { modals } from "lib/contants";

export default {
    title: "Components",
    component: Component,

};

export const PaginationContent = (args: PaginationContentProps) => <div className="flex flex-col items-start"><Component {...args} />   </div>

PaginationContent.args = {
    name: "modal",
    per: 8,
    jsx: ({ data }: any) => <ModalCard {...data} />,
    data: modals,
    containerClass: 'flex gap-8 w-full flex-wrap'
}