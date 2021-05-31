import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class ContactSuccess extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'signin section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'signin-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Thanks for your enquiry !',
    };

    return (
      <section {...props} className={outerClasses}>
        <div className='container'>
          <div className={innerClasses}>
            <SectionHeader
              tag='h1'
              data={sectionHeader}
              className='center-content'
            />
            <div className='tiles-wrap'>
              <div className='tiles-item'>
                <div className='tiles-item-inner'>
                  <div className='mt-24 mb-32'>
                    <Link href='/'>
                      <Button color='primary' wide>
                        Go back
                      </Button>
                    </Link>
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

ContactSuccess.propTypes = propTypes;
ContactSuccess.defaultProps = defaultProps;

export default ContactSuccess;
