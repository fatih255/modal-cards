import type { NextPage } from 'next'

//components
import Button from '../components/Button'
import Flexing from '../components/Flexing'
import NumberItem from '../components/NumberItem'
import CheckList from '../components/CheckList'
import FeaturesCounter from '../components/FeaturesCounter'
import ChooseModals from '../components/ChooseModals'
import PreviewModal from '../components/PreviewModal'

//contants
import { modals } from '../contants'
import { SecurityCodeModal } from '../components/modals'


const Home: NextPage = () => {
  return (
    <>
      {/** Slider Section */}
      <section className="box bg-gradient-to-b from-[#FFFFFF] to-[#E3F2F7] pb-[22rem]">
        <Flexing>
          <h1 className="text-7xl font-semibold tracking-tighter leading-tight mb-4 mt-16">Simple modal <br />card creator</h1>
          <p className="text-3xl mb-14 max-w-[1128px] tracking-tight">
            A utility-first CSS framework packed with classeslike flex, pt-4, text-center and
            rotate-90 that can becomposed to build any design, directly in your markup.
          </p>
          <Button size="large" shadow={true} text="Try it out now" />
          <CheckList className="mt-10" texts={['Free and paid plans', 'Setup in minutes', 'No credit card required*']} />
        </Flexing>
      </section>
      {/* Popupsmart meets all your business needs section */}
      <section className="bg-[#666666]">
        <Flexing>
          <PreviewModal />
          <FeaturesCounter
            description='Popupsmart meets all your business needs.'
            features={[
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
            ]} />
        </Flexing>
      </section>
      {/* Modal Card Generator Section */}
      <section className="pt-24">
        <Flexing>
          <h2 className="mb-4 text-4xl font-semibold tracking-tighter">Modal Card Generator</h2>
          <p className="leading-[24px] max-w-[459px]">Measure your return on email marketing efforts easier and
            faster by using thebest online tools. Popupsmart is ready to
            help you build an efficient email list!</p>

          {/* --Choose your template */}
          <div className="mt-24 mb-12">
            <NumberItem value="1 Choose your template" />
            <ChooseModals modals={modals} />
          </div>
          <div>
            <NumberItem value="2 Appearance (Size, colors, logo)" />
            <SecurityCodeModal />
          </div>
        </Flexing>
      </section>
    </>
  )
}

export default Home
