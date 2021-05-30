import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined,
};

export default function Image({
  className,
  src,
  width,
  height,
  alt,
  ...props
}) {
  return (
    <img
      {...props}
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
