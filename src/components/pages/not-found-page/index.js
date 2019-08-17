import React from 'react';

import BackLink from '../../common-components/back-home-link';

import './not-found-page.scss';

const blockName = 'not-found';

const NotFoundPage = () => {
  return (
    <div className={blockName}>
      <BackLink />
      <p className={`${blockName}__message`}>Ooops nothing goes here...</p>
    </div>
  );
};

export default NotFoundPage;
