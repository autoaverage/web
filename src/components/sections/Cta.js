import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

class Cta extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      split,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'cta section center-content-mobile',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'cta-inner section-inner reveal-from-top',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider',
      split && 'cta-split'
    );

    return (
      <section {...props} className={outerClasses}>
        <div className='container'>
          <div className={innerClasses}>
            <div className='cta-slogan'>
              <h3 className='m-0'>
                Ready to dollar cost average automatically ?
              </h3>
            </div>
            <div className='cta-action'>
              <Button
                tag='a'
                color='secondary'
                wideMobile
                href='https://app.autoaverage.com/signup'
              >
                Setup a Buy order
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
