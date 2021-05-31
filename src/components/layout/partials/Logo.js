import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const Logo = ({ className, ...props }) => {
  const classes = classNames('brand', className);

  return (
    <div {...props} className={classes}>
      <h1 className='m-0'>
        <Link href='/'>
          <img src='/images/logo.svg' alt='Frame' width={150} />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
