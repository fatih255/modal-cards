import React from 'react'
import Logo from 'svgs/logo.svg'
import DropdownIcon from 'svgs/dropdown.svg'
import Button from './Button'
import Flexing from './Flexing'
import { scrollStep } from '../lib/utils'
import { useAppSelector } from '../redux/hooks'
type Props = {}

export default function Header({ }: Props) {

    const signInHandler = () => {
        scrollStep('1')
    }

    return (
        <Flexing>
            <div className="flex justify-between items-stretch py-6">
                <div className="flex gap-2 items-center">
                    <Logo />
                    <span className="font-inter font-extrabold font-family tracking-tight">
                        modals.cards
                    </span>
                </div>
                <ul className="nav">
                    <li><a href="#solutions">Solutions <DropdownIcon /></a></li>
                    <li><a href="#product-tour">Product Tour</a></li>
                    <li><a href="#showcase">Showcase</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
                <div className="flex gap-2 ">
                    <Button onClick={signInHandler} text="Sign in" theme="light" />
                    <Button onClick={signInHandler} text="Try for free" size="small" />
                </div>
            </div>
        </Flexing>
    )
}