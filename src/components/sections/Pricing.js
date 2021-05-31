import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Switch from '../elements/Switch';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false,
};

class Pricing extends React.Component {
  state = {
    priceChangerValue: '1',
    priceInput: {
      // 0: "1,000",
      // 1: "1,250"
    },
    priceOutput: {
      plan1: {
        0: ['$', '20', '/ 1 month'],
        1: ['$', '20', '/ 1 month'],
      },
      plan2: {
        0: ['$', '50', '/ 3 months'],
        1: ['$', '50', '/ 3 months'],
      },
      plan3: {
        0: ['$', '100', '/ 1 year'],
        1: ['$', '100', '/ 1 year'],
      },
    },
  };

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    if (this.props.pricingSlider) {
      this.slider.current.setAttribute('min', 0);
      this.slider.current.setAttribute(
        'max',
        Object.keys(this.state.priceInput).length - 1
      );
      this.thumbSize = parseInt(
        window
          .getComputedStyle(this.sliderValue.current)
          .getPropertyValue('--thumb-size'),
        10
      );
      this.handleSliderValuePosition(this.slider.current);
    }
  }

  handlePricingSwitch = (e) => {
    this.setState({ priceChangerValue: e.target.checked ? '1' : '0' });
  };

  handlePricingSlide = (e) => {
    this.setState({ priceChangerValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset =
      (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left =
      input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px';
  };

  getPricingData = (values, set) => {
    return set !== undefined
      ? values[this.state.priceChangerValue][set]
      : values[this.state.priceChangerValue];
  };

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'pricing section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'pricing-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap illustration-section-02',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Pricing',
      paragraph:
        'Choose a plan that suits your needs to go further than our free demo and support the project',
    };

    return (
      <section
        {...props}
        className={outerClasses}
        style={{ overflow: 'hidden' }}
      >
        <div className='container'>
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className='center-content' />
            {pricingSwitcher && (
              <div className='pricing-switcher center-content'>
                <Switch
                  checked={this.state.priceChangerValue === '1' ? true : false}
                  onChange={this.handlePricingSwitch}
                  rightLabel='Billed Annually'
                >
                  Billed Monthly
                </Switch>
              </div>
            )}
            {pricingSlider && (
              <div className='pricing-slider center-content'>
                <label className='form-slider'>
                  <span className='mb-16'>How many users do you have?</span>
                  <input
                    type='range'
                    ref={this.slider}
                    defaultValue={this.state.priceChangerValue}
                    onChange={this.handlePricingSlide}
                  />
                </label>
                <div ref={this.sliderValue} className='pricing-slider-value'>
                  {this.getPricingData(this.state.priceInput)}
                </div>
              </div>
            )}
            <div className={tilesClasses}>
              <div
                className='tiles-item reveal-from-top'
                data-reveal-delay='200'
              >
                <div className='tiles-item-inner has-shadow'>
                  <div className='pricing-item-content'>
                    <div className='pricing-item-header pb-16 mb-24'>
                      <div className='pricing-item-price'>
                        <span className='pricing-item-price-currency h3 text-color-mid'>
                          {this.getPricingData(this.state.priceOutput.plan1, 0)}
                        </span>
                        <span className='pricing-item-price-amount h1'>
                          {this.getPricingData(this.state.priceOutput.plan1, 1)}
                        </span>
                        <span className='text-sm'>
                          {this.getPricingData(this.state.priceOutput.plan1, 2)}
                        </span>
                      </div>
                      <div className='text-color-low text-xs'>Discovery</div>
                    </div>
                    <div className='pricing-item-features mb-40'>
                      <div className='pricing-item-features-title text-xs text-color-high mb-24'>
                        What's included
                      </div>
                      <ul className='pricing-item-features-list list-reset text-xs mb-32'>
                        <li className='is-checked'>
                          Create buy and sell orders
                        </li>
                        <li className='is-checked'>24/7 support</li>
                        <li className='is-checked'>Up to 10 tasks</li>
                        <li className='is-checked'>Up to 100 orders/month</li>
                        <li>Lower than daily intervals</li>
                      </ul>
                    </div>
                  </div>
                  <div className='pricing-item-cta mb-8'>
                    <Button
                      tag='a'
                      color='primary'
                      wide
                      href='https://app.autoaverage.com/signup'
                    >
                      Start free demo
                    </Button>
                  </div>
                </div>
              </div>

              <div className='tiles-item reveal-from-top'>
                <div className='tiles-item-inner has-shadow'>
                  <div className='pricing-item-content'>
                    <div className='pricing-item-header pb-16 mb-24'>
                      <div className='pricing-item-price'>
                        <span className='pricing-item-price-currency h3 text-color-mid'>
                          {this.getPricingData(this.state.priceOutput.plan2, 0)}
                        </span>
                        <span className='pricing-item-price-amount h1'>
                          {this.getPricingData(this.state.priceOutput.plan2, 1)}
                        </span>
                        <span className='text-sm'>
                          {this.getPricingData(this.state.priceOutput.plan2, 2)}
                        </span>
                      </div>
                      <div className='text-color-low text-xs'>Enthusiast</div>
                    </div>
                    <div className='pricing-item-features mb-40'>
                      <div className='pricing-item-features-title text-xs text-color-high mb-24'>
                        What's included
                      </div>
                      <ul className='pricing-item-features-list list-reset text-xs mb-32'>
                        <li className='is-checked'>
                          Create buy and sell orders
                        </li>
                        <li className='is-checked'>24/7 support</li>
                        <li className='is-checked'>Up to 10 tasks</li>
                        <li className='is-checked'>Up to 100 orders/month</li>
                        <li className='is-checked'>
                          Lower than daily intervals
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='pricing-item-cta mb-8'>
                    <Button
                      tag='a'
                      color='primary'
                      wide
                      href='https://app.autoaverage.com/signup'
                    >
                      Start free demo
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className='tiles-item reveal-from-top'
                data-reveal-delay='200'
              >
                <div className='tiles-item-inner has-shadow'>
                  <div className='pricing-item-content'>
                    <div className='pricing-item-header pb-16 mb-24'>
                      <div className='pricing-item-price'>
                        <span className='pricing-item-price-currency h3 text-color-mid'>
                          {this.getPricingData(this.state.priceOutput.plan3, 0)}
                        </span>
                        <span className='pricing-item-price-amount h1'>
                          {this.getPricingData(this.state.priceOutput.plan3, 1)}
                        </span>
                        <span className='text-sm'>
                          {this.getPricingData(this.state.priceOutput.plan3, 2)}
                        </span>
                      </div>
                      <div className='text-color-low text-xs'>Investor</div>
                    </div>
                    <div className='pricing-item-features mb-40'>
                      <div className='pricing-item-features-title text-xs text-color-high mb-24'>
                        What's included
                      </div>
                      <ul className='pricing-item-features-list list-reset text-xs mb-32'>
                        <li className='is-checked'>
                          Create buy and sell orders
                        </li>
                        <li className='is-checked'>24/7 support</li>
                        <li className='is-checked'>Up to 10 tasks</li>
                        <li className='is-checked'>Up to 100 orders/month</li>
                        <li className='is-checked'>
                          Lower than daily intervals
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='pricing-item-cta mb-8'>
                    <Button
                      tag='a'
                      color='primary'
                      wide
                      href='https://app.autoaverage.com/signup'
                    >
                      Start free demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
