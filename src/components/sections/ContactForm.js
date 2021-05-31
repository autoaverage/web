import classNames from 'classnames';
import React from 'react';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Input from '../elements/Input';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class ContactForm extends React.Component {
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
      title: 'What would you like to tell us ?',
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
                  <form netlify name='contact' method='POST'>
                    <fieldset>
                      <div className='mb-12'>
                        <Input
                          label='Full name'
                          placeholder='Full name'
                          labelHidden
                          required
                        />
                      </div>
                      <div className='mb-12'>
                        <Input
                          type='email'
                          label='Email'
                          placeholder='Email'
                          labelHidden
                          required
                        />
                      </div>
                      <div className='mb-12'>
                        <Input
                          type='textarea'
                          label='Message'
                          placeholder='Please type your message here'
                          labelHidden
                          rows='5'
                          required
                        />
                      </div>
                      <div className='mt-24 mb-32'>
                        <Button color='primary' wide>
                          Send message
                        </Button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
