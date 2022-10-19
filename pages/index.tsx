import React from 'react'
import type { NextPage } from 'next'
import { useAppSelector } from 'redux/hooks'
import { conditionalRender } from 'lib/utils'
import { shallowEqual } from 'react-redux'
//components
import Button from 'components/Button'
import Flexing from 'components/Flexing'
import CheckList from 'components/CheckList'
import FeaturesCounter from 'components/FeaturesCounter'
import PreviewModal from 'components/PreviewModal'
import Title from 'components/Title'
import Panel from 'components/Panel'
//icons
import ConversionReadyIcon from 'icons/conversion-ready.svg'
import PixelPerfectIcon from 'icons/pixel-perfect.svg'
import ModernUsefulIcon from 'icons/modern-useful.svg'
import TargetingOptionsIcon from 'icons/targeting-options.svg'
import TargetingOptions2Icon from 'icons/targeting-options-2.svg'
import AwsIcon from 'icons/aws.svg'
import NoCodeIcon from 'icons/no-code.svg'

//Modal Generator Steps
import { ChooseYourTemplateStep } from 'components/steps'
import Accordion from 'components/Accordion'
import { FrequentlyAskedQuestions } from 'lib/contants'

const Home: NextPage = () => {
  const selectedModalName = useAppSelector(
    (state) => state.modal.selectedModalName,
    shallowEqual,
  )

  return (
    <>
      {/** Slider Section */}
      <section className='box bg-gradient-to-b from-[#FFFFFF] to-[#E3F2F7] pb-[22rem]'>
        <Flexing>
          <h1 className='text-7xl font-semibold tracking-tighter leading-tight mb-4 mt-16'>
            Simple modal <br />
            card creator
          </h1>
          <p className='text-3xl mb-14 max-w-[1128px] tracking-tight'>
            A utility-first CSS framework packed with classeslike flex, pt-4,
            text-center and rotate-90 that can becomposed to build any design,
            directly in your markup.
          </p>
          <Button
            size='large'
            shadow={true}
            text='Try it out now'
          />
          <CheckList
            className='mt-10'
            texts={[
              'Free and paid plans',
              'Setup in minutes',
              'No credit card required*',
            ]}
          />
        </Flexing>
      </section>
      {/* Popupsmart meets all your business needs section */}
      <section className='bg-[#666666]'>
        <Flexing>
          <PreviewModal extraClass='-translate-y-[50%]' />
          <FeaturesCounter
            className='-translate-y-[66%] pb-8'
            description='Popupsmart meets all your business needs.'
            features={[
              {
                name: 'Increase Conversion Rate',
                value: '3x',
              },
              {
                name: 'Email Subscribers',
                value: '120%',
              },
              {
                name: 'More Customer Engagement',
                value: '390%',
              },
            ]}
          />
        </Flexing>
      </section>
      {/* Modal Card Generator Section */}
      <section className='pt-24'>
        <Flexing>
          <Title>Modal Card Generator</Title>
          <p className='leading-[24px] max-w-[459px] mb-14 '>
            Measure your return on email marketing efforts easier and faster by
            using thebest online tools. Popupsmart is ready to help you build an
            efficient email list!
          </p>

          {/* Step-1 ---Choose your template  */}
          <ChooseYourTemplateStep />
          {/* 
            Step-2  -Appearance (Size, colors, logo) and Step-3 -Content inside Panel Component 
            ---if selected modal render Panel
            */}
          {conditionalRender(selectedModalName, <Panel />)}

          {/* Conversion & UX ready popups & modals section */}
          <section className='close-sticky'>
            <Title className='mb-[50px] mt-[50px] text-center'>
              Conversion & UX ready popups & modals
            </Title>
            <div className='flex justify-center items-stretch gap-[30px]'>
              <div className='flex flex-col flex-1 justify-start items-center gap-6 bg-design-gray-100 rounded-xl pt-14 pb-20'>
                <ConversionReadyIcon />
                <div className='flex flex-col items-center mt-[10px]'>
                  <h3 className='font-semibold text-lg mb-1'>Pixel Perfect</h3>
                  <p className='px-[70px] text-center text-sm leading-[20px] tracking-[-1%]'>
                    Helps you calculate your email marketing roi to measure
                    success.
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-1 justify-start items-center gap-6 bg-design-gray-100 rounded-xl pt-14 pb-20'>
                <PixelPerfectIcon />
                <div className='flex flex-col items-center mt-[10px]'>
                  <h3 className='font-semibold text-lg mb-1'>
                    Conversion Ready
                  </h3>
                  <p className='px-[101px] text-center text-sm leading-[20px] tracking-[-1%]'>
                    Empowers your emails by generating a free code for a CTA in
                    your subject line.
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-1 justify-start items-center gap-6 bg-design-gray-100 rounded-xl pt-14 pb-20'>
                <ModernUsefulIcon />
                <div className='flex flex-col items-center mt-[10px]'>
                  <h3 className='font-semibold text-lg mb-1'>
                    Modern & Useful
                  </h3>
                  <p className='px-[87px] text-center text-sm leading-[20px] tracking-[-1%]'>
                    Enables you to estimate the total profit of your investment
                    on a popup service.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Frequently Asked Questions Section */}
          <section>
            <Title className='mt-[120px] mb-[50px] text-center'>
              Frequently Asked Questions
            </Title>
            <div>
              <Accordion items={FrequentlyAskedQuestions} />
            </div>
          </section>
          {/* Build great popups without code Section */}
          <section>
            <Title className='mt-[120px] mb-[50px] text-center'>
              Build great popups without code
            </Title>
            <div className='flex flex-row gap-5 items-stretch justify-center w-full'>
              <div className='flex flex-1 flex-col items-center'>
                <div className='bg-primary rounded-full p-8'>
                  <TargetingOptionsIcon />
                </div>
                <span className='leading-[24px] text-center font-semibold text-lg mt-[30px] mb-[10px]'>
                  Targeting Options
                </span>
                <p className='text-center max-w-[250px] leading-[20px] text-sm tracking-[-1%]'>
                  Target +26 trigger to your visitors
                </p>
              </div>
              <div className='flex flex-1 flex-col items-center'>
                <div className='bg-primary rounded-full p-8'>
                  <TargetingOptions2Icon />
                </div>
                <span className='leading-[24px] text-center font-semibold text-lg mt-[30px] mb-[10px]'>
                  No-Code
                </span>
                <p className='text-center max-w-[180px] leading-[20px] text-sm tracking-[-1%]'>
                  No code required while you’re creating a popup
                </p>
              </div>
              <div className='flex flex-1 flex-col items-center'>
                <div className='bg-primary rounded-full p-8'>
                  <AwsIcon />
                </div>
                <span className='leading-[24px] text-center font-semibold text-lg mt-[30px] mb-[10px]'>
                  Targeting Options
                </span>
                <p className='text-center max-w-[213px] leading-[20px] text-sm tracking-[-1%]'>
                  Integrated with your marketing and CRM platforms
                </p>
              </div>
              <div className='flex flex-1 flex-col items-center'>
                <div className='bg-primary rounded-full p-8'>
                  <NoCodeIcon />
                </div>
                <span className='leading-[24px] text-center font-semibold text-lg mt-[30px] mb-[10px]'>
                  Targeting Options
                </span>
                <p className='text-center max-w-[200px] leading-[20px] text-sm tracking-[-1%]'>
                  Don’t worry about speed and Amazon AWS resources
                </p>
              </div>
            </div>
          </section>
        </Flexing>
      </section>
    </>
  )
}

export default Home
