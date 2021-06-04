import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
import LayoutAlternative from '../layouts/LayoutAlternative';

class Secondary extends React.Component {
  state = {
    demoModalActive: false,
  };

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  };

  render() {
    const genericSection04Header = {
      title: 'FAQ',
    };

    return (
      <LayoutAlternative>
        <Head>
          <title>Faqs - Cryptocurrency dollar cost averaging</title>
          <meta
            name='description'
            key='description'
            content='Cryptocurrency dollar cost averaging faq. You can find the answer for any question you may have'
          />
        </Head>
        <React.Fragment>
          <GenericSection className='illustration-section-01'>
            <div className='container-xs'>
              <SectionHeader
                data={genericSection04Header}
                className='center-content'
              />
              <Accordion>
                <AccordionItem title='Are my funds secure ?' active>
                  Yes they are. We never have access to your account. In fact,
                  we even encrypt your API keys in our database so that not even
                  us have access to them. Moreover, we do not have the
                  permission to withdraw funds from your acount. The latter
                  operation requires a double factor confirmation.
                </AccordionItem>
                <AccordionItem title='How does it work ?'>
                  <a href='https://github.com/autoaverage/worker-binance'>
                    Check it out.
                  </a>{' '}
                  Our code is open source. For the the non technical, we send
                  market orders on your behalf to the exchange API.
                </AccordionItem>
                <AccordionItem title='Is my exchange supported ?'>
                  We currently support Binance. We plan on releasing support for
                  other major exchanges soon.
                </AccordionItem>
                <AccordionItem title='Why are my tasks stopping ?'>
                  A task will stop automatically if it reports an error 3 times.
                  Check your balance on the quote asset or please
                  <Link href='/contact'> contact us</Link>
                </AccordionItem>
                {/* <AccordionItem title='Nisi porta lorem mollis aliquam ut.'>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </AccordionItem>
                <AccordionItem title='Nisi porta lorem mollis aliquam ut.'>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </AccordionItem> */}
              </Accordion>
            </div>
          </GenericSection>
          <Cta
            hasBgColor
            invertColor
            split
            className='illustration-element-08'
            topDivider
          />
        </React.Fragment>
      </LayoutAlternative>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto',
};

export default Secondary;
