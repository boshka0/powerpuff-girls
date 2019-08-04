import React from 'react';

import './not-found-page.scss';
import BackLink from '../back-home-link';

const blockName = 'not-found';

const NotFoundPage = () => {
  return (
    <div className={blockName}>
      <BackLink />
      <p className={`${blockName}-message`}>Ooops nothing goes here...</p>
    </div>
  );
};

export default NotFoundPage;
