import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const Logo = ({ className, ...props }) => {
  const classes = classNames('brand', className);

  return (
    <div {...props} className={classes}>
      <Link href='/'>
        <img
          src='/images/logo.svg'
          alt='Frame'
          width={150}
          height={40}
          title='Cryptocurrency dollar cost averaging logo'
          alt='Logo of cryptocurrency dollar cost averaging software'
        />
      </Link>
    </div>
  );
};

export default Logo;
