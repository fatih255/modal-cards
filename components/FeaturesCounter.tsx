import React from 'react'

export type FeaturesCounterProps = {
  features: { name: string; value: string }[]
  description?: string
  className?: string
}

export default function FeaturesCounter({
  features,
  description,
  className = '',
}: FeaturesCounterProps) {
  return (
    <div className={`text-white ${className}`}>
      <div className='flex justify-between'>
        {features.map(({ name, value }, index) => (
          <div
            key={name + index}
            className='flex flex-col gap-4'>
            <span className='text-7xl font-semibold tracking-tight'>
              {value}
            </span>
            <p className='font-inter max-w-[130px]'>{name}</p>
          </div>
        ))}
        <h2 className='text-4xl font-semibold max-w-[24rem] leading-[44px]'>
          {description}
        </h2>
      </div>
    </div>
  )
}
