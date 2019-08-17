import React from 'react';
import PropTypes from 'prop-types';

import './error.scss';

const blockName = 'error';

const Error = ({ block }) => {
  return (
    <div className={blockName}>
      Sorry, some error occurred while preparing the response for {block}
    </div>
  );
};

Error.propTypes = {
  block: PropTypes.string
};

export default Error;
