import classNames from 'classnames';
import React from 'react';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class FeaturesSplit extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Reduce the impact of volatility on your portfolio',
      paragraph:
        "Dollar-cost averaging is a strategy to reduce the impact of volatility by spreading out your purchases over time so you're not buying at a peak price.",
    };

    return (
      <section
        {...props}
        className={outerClasses}
        style={{ overflow: 'hidden' }}
      >
        <div className='container'>
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className='center-content reveal-from-top'
            >
              <div className='features-split-icon mb-24'>
                <Image
                  src={require('./../../assets/images/features-split-icon.svg')}
                  alt='Features split icon'
                  width={80}
                  height={80}
                />
              </div>
            </SectionHeader>
            <div className={splitClasses}>
              <div className='split-item reveal-from-top'>
                <div className='split-item-content center-content-mobile'>
                  <h3 className='mt-0 mb-16'>Reduce your risk</h3>
                  <p className='m-0'>
                    Crypto dollar cost averaging reduces the risk involved in
                    investing in a volatile market such as cryptocurrency.
                    <br />
                    DCA leads you to buy less at a peak price, and more at a low
                    price, which reduces your exposure to price fluctuations.
                  </p>
                </div>
                <div
                  className={classNames(
                    'split-item-image center-content-mobile illustration-element-03',
                    imageFill && 'split-item-image-fill'
                  )}
                >
                  <Image
                    // src={require('./../../assets/images/features-split-image.svg')}
                    src='/images/undraw_statistic_chart_38b6.webp'
                    width={528}
                    height={396}
                    alt='Man looking at a chart'
                    title='Reduce your risk'
                  />
                </div>
              </div>

              <div className='split-item reveal-from-top'>
                <div className='split-item-content center-content-mobile'>
                  <h3 className='mt-0 mb-16'>Buy the dips</h3>
                  <p className='m-0'>
                    AutoAverage allows you to automatically buy the dips. It's
                    in our nature to be risk adverse. Whenever it's all red,
                    most people tend to stay away from the market, or worse,
                    sell their holdings. Having a strategy that always buys on
                    your behalf, whatever the market is doing that day, is a
                    great way to not let emotions get involved.
                  </p>
                </div>
                <div
                  className={classNames(
                    'split-item-image center-content-mobile illustration-element-04',
                    imageFill && 'split-item-image-fill'
                  )}
                >
                  <Image
                    // src={require('./../../assets/images/features-split-top-02.png')}
                    src='/images/undraw_Investing_re_bov7.webp'
                    width={744}
                    height={512}
                    alt='Woman looking at a multiple charts'
                    title='Buy the dips'
                  />
                </div>
              </div>

              <div className='split-item reveal-from-top'>
                <div className='split-item-content center-content-mobile'>
                  <h3 className='mt-0 mb-16'>You're in charge</h3>
                  <p className='m-0'>
                    We do not hold your assets. You do.
                    <br />
                    Funds are secure on your exchange, we only execute orders on
                    your behalf. We do not have the permission to transfer from
                    your account. Our code is also open source. Just revoke your
                    API keys and we're out.
                  </p>
                </div>
                <div
                  className={classNames(
                    'split-item-image center-content-mobile illustration-element-05',
                    imageFill && 'split-item-image-fill'
                  )}
                >
                  <Image
                    // src={require('./../../assets/images/features-split-top-03.png')}
                    src='/images/undraw_switches_1js3.webp'
                    width={747}
                    height={570}
                    alt='Man looking at switch control knobs'
                    title="You're in charge"
                  />
                </div>
              </div>

              <div className='split-item reveal-from-top'>
                <div className='split-item-content center-content-mobile'>
                  <h3 className='mt-0 mb-16'>Investing on autopilot</h3>
                  <p className='m-0'>
                    Cryto dollar cost averaging is 100% automatic with
                    AutoAverage. You set your purchase amount, the frequency,
                    and we take care of the rest. Letting you know how it's
                    going if you so choose.
                  </p>
                </div>
                <div
                  className={classNames(
                    'split-item-image center-content-mobile illustration-element-04',
                    imageFill && 'split-item-image-fill'
                  )}
                >
                  <Image
                    src='/images/undraw_yoga_248n.webp'
                    width={744}
                    height={512}
                    alt='Relaxed women practicing yoga'
                    title='Investing on autopilot'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const img01Style = {
  position: 'absolute',
  width: '139.77%',
  maxWidth: '139.77%',
  top: '-13.89%',
  left: '-16.47%',
};

const img02Style = {
  position: 'absolute',
  width: '140.91%',
  maxWidth: '140.91%',
  top: '-13.88%',
  left: '-24.43%',
};

const img03Style = {
  position: 'absolute',
  width: '141.48%',
  maxWidth: '141.48%',
  top: '-13.88%',
  left: '-16.47%',
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
