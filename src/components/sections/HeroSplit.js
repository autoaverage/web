import classNames from 'classnames';
import React from 'react';
import { SectionSplitProps } from '../../utils/SectionProps';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class HeroSplit extends React.Component {
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
      'hero section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    return (
      <section {...props} className={outerClasses}>
        <div className='container'>
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className='split-item'>
                <div className='hero-content split-item-content center-content-mobile'>
                  <h1 className='mt-0 mb-16 reveal-from-left'>
                    Cryptocurrency dollar cost averaging
                  </h1>
                  <p
                    className='mt-0 mb-32 reveal-from-left'
                    data-reveal-delay='200'
                  >
                    Buy cryptocurrency automatically at regular intervals and
                    reduce your exposure to volatility
                  </p>
                  <div className='reveal-from-left' data-reveal-delay='400'>
                    <Button
                      tag='a'
                      color='primary'
                      href='https://app.autoaverage.com'
                      wideMobile
                    >
                      Start earning for free
                    </Button>
                  </div>
                </div>
                <div className='hero-figure is-3d split-item-image illustration-element-01 reveal-from-right'>
                  <img
                    className='has-shadow'
                    src='/images/hero-image.svg'
                    alt='Hero'
                    width={528}
                    height={396}
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

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;
