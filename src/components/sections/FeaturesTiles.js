import classNames from 'classnames';
import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class FeaturesTiles extends React.Component {
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
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

    const sectionHeader = {
      title: 'Built for Cryptocurrrencies',
      paragraph:
        'Dollar cost averaging for crypto currency is domain specific.We build AutoAverage around crypto',
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
            <div className={tilesClasses}>
              <div className='tiles-item'>
                <div className='tiles-item-inner'>
                  <div className='features-tiles-item-header'>
                    <div
                      className='features-tiles-item-image mb-16 reveal-from-top'
                      data-reveal-container='.tiles-item'
                    >
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-01.svg')}
                        width={72}
                        height={72}
                        title='Security illustration'
                        alt='An illustration that inspires security'
                      />
                    </div>
                  </div>
                  <div className='features-tiles-item-content'>
                    <h4
                      className='h5 mt-0 mb-8 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='100'
                    >
                      Security
                    </h4>
                    <p
                      className='m-0 text-sm reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='200'
                    >
                      Funds never leave your exchange. We connect using your api
                      key, which we encrypt so we never have acces to it. You
                      can revoke access at any time from your exchange
                    </p>
                  </div>
                </div>
              </div>

              <div className='tiles-item'>
                <div className='tiles-item-inner'>
                  <div className='features-tiles-item-header'>
                    <div
                      className='features-tiles-item-image mb-16 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='100'
                    >
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-02.svg')}
                        width={72}
                        height={72}
                        title='Automation illustration'
                        alt='An illustration that demonstrates automation'
                      />
                    </div>
                  </div>
                  <div className='features-tiles-item-content'>
                    <h4
                      className='h5 mt-0 mb-8 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='200'
                    >
                      Automation
                    </h4>
                    <p
                      className='m-0 text-sm reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='300'
                    >
                      AutoAverage is 100% set and forget. You can choose to
                      receive notification on each purchase or no notification
                      at all.
                    </p>
                  </div>
                </div>
              </div>

              <div className='tiles-item'>
                <div className='tiles-item-inner'>
                  <div className='features-tiles-item-header'>
                    <div
                      className='features-tiles-item-image mb-16 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='200'
                    >
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-03.svg')}
                        width={72}
                        height={72}
                        title='Robust infrastructure illustration'
                        alt='An illustration that demonstrates a robust infrastructure'
                      />
                    </div>
                  </div>
                  <div className='features-tiles-item-content'>
                    <h4
                      className='h5 mt-0 mb-8 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='300'
                    >
                      Robust infrastructure
                    </h4>
                    <p
                      className='m-0 text-sm reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='400'
                    >
                      Each user tasks run under a dedicated environment. This
                      guarantees the best execution for your orders. Security is
                      also increased in this isolated environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className='tiles-item'>
                <div className='tiles-item-inner'>
                  <div className='features-tiles-item-header'>
                    <div
                      className='features-tiles-item-image mb-16 reveal-from-top'
                      data-reveal-container='.tiles-item'
                    >
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-04.svg')}
                        width={72}
                        height={72}
                        title='No hiddens feeds illustration'
                        alt='No hidden fees image'
                      />
                    </div>
                  </div>
                  <div className='features-tiles-item-content'>
                    <h4
                      className='h5 mt-0 mb-8 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='100'
                    >
                      No hidden fees
                    </h4>
                    <p
                      className='m-0 text-sm reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='200'
                    >
                      We do not have any hidden fees and our pricing does not
                      fluctuate with market conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className='tiles-item'>
                <div className='tiles-item-inner'>
                  <div className='features-tiles-item-header'>
                    <div
                      className='features-tiles-item-image mb-16 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='100'
                    >
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-05.svg')}
                        width={72}
                        height={72}
                        title='Open source illustration'
                        alt='A picto that demonstrates that the software is open source'
                      />
                    </div>
                  </div>
                  <div className='features-tiles-item-content'>
                    <h4
                      className='h5 mt-0 mb-8 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='200'
                    >
                      Open Source
                    </h4>
                    <p
                      className='m-0 text-sm reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='300'
                    >
                      The code we use to run our service is publicly available
                      on Github. You can use it directly if you choose to.
                    </p>
                  </div>
                </div>
              </div>

              <div className='tiles-item'>
                <div className='tiles-item-inner'>
                  <div className='features-tiles-item-header'>
                    <div
                      className='features-tiles-item-image mb-16 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='200'
                    >
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-06.svg')}
                        width={72}
                        height={72}
                        title='Built by Crypto investors illustration'
                        alt='A pictogram that shows that this software is build by crypto investors'
                      />
                    </div>
                  </div>
                  <div className='features-tiles-item-content'>
                    <h4
                      className='h5 mt-0 mb-8 reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='300'
                    >
                      Built by Crypto investors
                    </h4>
                    <p
                      className='m-0 text-sm reveal-from-top'
                      data-reveal-container='.tiles-item'
                      data-reveal-delay='400'
                    >
                      As founders, we are involved in Cryptocurrrencies
                      ourselves and we needed this service. So we created it.
                    </p>
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

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
