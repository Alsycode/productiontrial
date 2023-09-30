import React from 'react';
import Link from 'next/link';

const PrimaryCTAButton = props => {

    return (
      
<Link href='/contact-us-1'>
  <a
    className={`primaryBtn 
      ${props.size === 'big' ? "primaryBtn--big" : "primaryBtn--normal"}
      ${props.icon ? "primaryBtn--grid" : null}
      ${props.customClass}`}
    onClick={props.handleClick}
  >
    {props.icon && props.icon}
    {props.label}
  </a>
</Link>

    );
}

export default PrimaryCTAButton;