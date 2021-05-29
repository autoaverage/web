import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({ className, ...props }) => {
  const classes = classNames('brand', className);

  return (
    <div {...props} className={classes}>
      <h1 className='m-0'>
        <Link href='/'>
          <Image src='/images/logo.svg' alt='Frame' width={32} height={32} />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
