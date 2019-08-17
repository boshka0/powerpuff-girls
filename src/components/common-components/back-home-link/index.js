import React from 'react';

import { Link } from 'react-router-dom';

import './back-home-link.scss';

const blockName = 'back-link';

const BackLink = () => {
  return (
    <Link
      className={blockName}
      to='/'
    >
      BACK
    </Link>
  );
};

export default BackLink;
