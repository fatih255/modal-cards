import { FeaturesCounterProps, default as Component } from "components/FeaturesCounter";

export default {
    title: "Components",
    component: Component,
};

export const FeaturesCounter = (args: FeaturesCounterProps) => <Component {...args} />

FeaturesCounter.args = {
    description: 'Popupsmart meets all your business needs.',
    className: 'bg-[#666666] pb-8',
    features: [
        {
            name: 'Increase Conversion Rate',
            value: '3x'
        },
        {
            name: 'Email Subscribers',
            value: '120%'
        },
        {
            name: 'More Customer Engagement',
            value: '390%'
        }
    ]
};